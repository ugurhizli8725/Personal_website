import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
	const references = await prisma.reference.findMany({
		orderBy: { date: "desc" },
	});
	return NextResponse.json({ references });
}