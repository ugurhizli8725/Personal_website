import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Construction, renovation, and repair services offered.",
};

const SERVICES: Array<{ title: string; description: string }> = [
  {
    title: "New Construction",
    description: "Foundations to finishes, turnkey homes and commercial spaces.",
  },
  {
    title: "Renovations",
    description: "Kitchens, bathrooms, additions, and whole-home updates.",
  },
  {
    title: "Repairs & Maintenance",
    description: "Structural repairs, siding, roofing, and preventive maintenance.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        High-quality work with transparent timelines and pricing.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div key={s.title} className="rounded-lg border border-black/10 dark:border-white/10 p-6">
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">{s.description}</p>
            <Link href="/contact" className="mt-4 inline-block text-sm hover:underline">
              Request a quote →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

