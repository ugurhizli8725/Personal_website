import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.communication.deleteMany();
	await prisma.pricing.deleteMany();
	await prisma.service.deleteMany();
	await prisma.availability.deleteMany();
	await prisma.reference.deleteMany();
	await prisma.certification.deleteMany();

	await prisma.service.createMany({
		data: [
			{ title: "New Construction", description: "Foundations to finishes, turnkey homes and commercial spaces.", isFeatured: true },
			{ title: "Renovations", description: "Kitchens, bathrooms, additions, and whole-home updates.", isFeatured: true },
			{ title: "Repairs & Maintenance", description: "Structural repairs, siding, roofing, and preventive maintenance.", isFeatured: true },
		],
	});

	const allServices = await prisma.service.findMany();

	// Pricing per service
	for (const svc of allServices) {
		await prisma.pricing.createMany({
			data: [
				{ serviceId: svc.id, title: "Hourly Rate", description: "Standard labor rate", rateType: "hourly", amountCents: 5000, currency: "GBP" },
				{ serviceId: svc.id, title: "Day Rate", description: "Full day on site", rateType: "daily", amountCents: 35000, currency: "GBP" },
			],
		});
	}

	// Availability: next two weeks sample
	const now = new Date();
	for (let i = 1; i <= 14; i++) {
		const startsAt = new Date(now);
		startsAt.setDate(now.getDate() + i);
		startsAt.setHours(8, 0, 0, 0);
		const endsAt = new Date(startsAt);
		endsAt.setHours(17, 0, 0, 0);
		await prisma.availability.create({
			data: { startsAt, endsAt, status: i % 3 === 0 ? "booked" : "available", note: i % 5 === 0 ? "Site visit" : null },
		});
	}

	// References
	await prisma.reference.createMany({
		data: [
			{ clientName: "Alice Johnson", projectTitle: "Kitchen Renovation", testimonial: "Professional, timely, and excellent craftsmanship.", rating: 5, date: new Date() },
			{ clientName: "BuildCo Ltd.", projectTitle: "Office Fit-Out", testimonial: "Delivered ahead of schedule with great communication.", rating: 5, date: new Date() },
		],
	});

	// Certifications
	await prisma.certification.createMany({
		data: [
			{ name: "CSCS Card", issuer: "CITB", issuedAt: new Date() },
			{ name: "First Aid at Work", issuer: "St John Ambulance", issuedAt: new Date() },
		],
	});

	console.log("Seed completed");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});