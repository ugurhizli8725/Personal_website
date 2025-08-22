import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
	const certifications = await prisma.certification.findMany({
		orderBy: { issuedAt: "desc" },
	});
	return NextResponse.json({ certifications });
}