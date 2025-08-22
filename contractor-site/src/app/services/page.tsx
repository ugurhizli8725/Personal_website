import type { Metadata } from "next";
import Link from "next/link";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Services",
  description: "Construction, renovation, and repair services offered.",
};

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    include: { pricing: true },
    orderBy: { title: "asc" },
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        High-quality work with transparent timelines and pricing.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="rounded-lg border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{s.description}</p>
            {s.pricing.length > 0 && (
              <ul className="mt-4 text-sm text-black/70 dark:text-white/70 space-y-1">
                {s.pricing.map((p) => (
                  <li key={p.id}>
                    <span className="font-medium">{p.title}:</span> {p.currency} {(p.amountCents / 100).toFixed(2)} {p.rateType}
                  </li>
                ))}
              </ul>
            )}
            <Link href="/contact" className="mt-4 inline-block text-sm hover:underline">
              Request a quote →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

