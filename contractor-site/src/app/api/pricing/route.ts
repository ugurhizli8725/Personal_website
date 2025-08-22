import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const serviceId = searchParams.get("serviceId");
	const where = serviceId ? { serviceId: Number(serviceId) } : {};
	const pricing = await prisma.pricing.findMany({
		where,
		orderBy: { title: "asc" },
	});
	return NextResponse.json({ pricing });
}