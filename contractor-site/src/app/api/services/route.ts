import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
	const services = await prisma.service.findMany({
		include: { pricing: true },
		orderBy: { title: "asc" },
	});
	return NextResponse.json({ services });
}