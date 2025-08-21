import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for estimates and inquiries.",
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        Send a message and we’ll get back within 1 business day.
      </p>
      <form className="mt-8 grid gap-4" action="/api/contact" method="post">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm">Name</label>
          <input id="name" name="name" required className="rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" name="email" type="email" required className="rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm">Message</label>
          <textarea id="message" name="message" rows={5} required className="rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" />
        </div>
        <button type="submit" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90">
          Send Message
        </button>
      </form>

      <div className="mt-8 text-sm">
        <div>Phone: <a href="tel:+10000000000" className="hover:underline">+1 (000) 000-0000</a></div>
        <div>Email: <a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></div>
        <div>Service Area: City, State</div>
      </div>
    </section>
  );
}

