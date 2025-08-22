import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
	const slots = await prisma.availability.findMany({
		orderBy: { startsAt: "asc" },
	});
	return NextResponse.json({ slots });
}