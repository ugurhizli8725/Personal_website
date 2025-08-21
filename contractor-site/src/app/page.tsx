import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            We’re building AI engine to empower the construction workers in the UK.
          </h1>
          <p className="mt-4 text-black/70 dark:text-white/70 text-lg">
            Residential and commercial builds, renovations, and repairs. 10+ years of hands-on experience delivering safe, on-time results.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">
              Get a Quote
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
              View Services
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-semibold">10+ yrs</div>
              <div className="text-sm text-black/70 dark:text-white/70">Experience</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">100+</div>
              <div className="text-sm text-black/70 dark:text-white/70">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">Licensed</div>
              <div className="text-sm text-black/70 dark:text-white/70">and Insured</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">5⭐</div>
              <div className="text-sm text-black/70 dark:text-white/70">Client Rated</div>
            </div>
          </div>
        </div>
        <div className="aspect-video rounded-xl bg-black/5 dark:bg-white/10" />
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold">Featured Services</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["New Construction", "Renovations", "Repairs"].map((service) => (
            <div key={service} className="rounded-lg border border-black/10 dark:border-white/10 p-6">
              <h3 className="font-medium">{service}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                High-quality workmanship with transparent pricing and timelines.
              </p>
              <Link href="/services" className="mt-4 inline-block text-sm hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
