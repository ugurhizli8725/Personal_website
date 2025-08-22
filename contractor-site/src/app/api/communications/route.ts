import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
	const messages = await prisma.communication.findMany({
		orderBy: { createdAt: "desc" },
	});
	return NextResponse.json({ messages });
}