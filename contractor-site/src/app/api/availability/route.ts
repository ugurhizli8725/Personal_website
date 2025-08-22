import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
	const slots = await prisma.availability.findMany({
		orderBy: { startsAt: "asc" },
	});
	return NextResponse.json({ slots });
}