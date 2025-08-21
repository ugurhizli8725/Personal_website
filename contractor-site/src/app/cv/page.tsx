import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Experience, certifications, and project highlights.",
};

export default function CvPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        Licensed contractor with a decade of experience in residential and commercial projects.
      </p>

      <div className="mt-8 grid gap-8">
        <div>
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="border-l-2 pl-4 border-black/10 dark:border-white/10">
              Lead Contractor, ABC Builders (2019–Present) — Managed teams, delivered 50+ projects.
            </li>
            <li className="border-l-2 pl-4 border-black/10 dark:border-white/10">
              Contractor, Home Reno Co. (2015–2019) — Kitchen/bath remodels, framing, drywall, finishes.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Certifications</h2>
          <ul className="mt-4 list-disc pl-6 text-sm">
            <li>General Contractor License</li>
            <li>OSHA 30</li>
            <li>EPA Lead-Safe Certified</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>Custom Home Build — 3,000 sq ft, energy-efficient design, completed on time and budget.</li>
            <li>Office Renovation — Phased remodel minimizing downtime for a 40-person team.</li>
            <li>Historic Restoration — Preserved character while updating systems to code.</li>
          </ul>
        </div>

        <div className="pt-2">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}

