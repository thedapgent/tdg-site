import { Link } from 'react-router-dom';
import { Ruler, Scissors, Shirt, Church } from 'lucide-react';

const OFFERINGS = [
  {
    icon: Scissors,
    title: 'Custom Suiting',
    copy: 'Business and formalwear built from your measurements, your fabric, your vision. Every commission starts as a conversation.',
    href: '/services',
  },
  {
    icon: Ruler,
    title: 'Style Consulting',
    copy: 'One-on-one guidance on fit, wardrobe building, and dressing with intention — for the man who wants to get it right the first time.',
    href: 'https://consulting.thedappergentleman.ca/',
  },
  {
    icon: Church,
    title: 'Of the Cloth',
    copy: 'Clergy garments tailored for the called. Vestments and formalwear built with the same precision as our suiting.',
    href: '/services',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-ink)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(115deg, var(--color-gold) 0, var(--color-gold) 1px, transparent 1px, transparent 64px)',
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-28 sm:py-36">
          <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Brampton, Ontario — Est. 2019
          </span>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-[var(--color-cream)] sm:text-7xl">
            You Design.
            <br />
            We Create.
          </h1>
          <div className="tape-rule my-8 w-40" />
          <p className="max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--color-cream)]/75 sm:text-lg">
            The Dapper Gentleman is dedicated to the art of tailoring unique
            business and formalwear for gentlemen. Every client plays the
            role of lead designer — every commissioned garment is the
            canvas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-sm bg-[var(--color-gold)] px-7 py-3.5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)]"
            >
              Book a Consultation
            </Link>
            <Link
              to="/gallery"
              className="rounded-sm border border-[var(--color-cream)]/30 px-7 py-3.5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-cream)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              View the Work
            </Link>
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          The Studio
        </span>
        <p className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-snug text-[var(--color-ink)] sm:text-4xl">
          A garment built to specification is a garment built to last —
          and to be worn with the confidence only a proper fit provides.
        </p>
      </section>

      {/* Offerings */}
      <section className="bg-[var(--color-parchment)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {OFFERINGS.map(({ icon: Icon, title, copy, href }) => (
              <a
                key={title}
                href={href}
                className="group flex flex-col border border-[var(--color-ink)]/10 bg-[var(--color-cream)] p-8 transition-colors hover:border-[var(--color-gold)]"
              >
                <Icon className="text-[var(--color-gold)]" size={28} strokeWidth={1.5} />
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-charcoal)]/70">
                  {copy}
                </p>
                <span className="mt-6 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-gold)] transition-transform group-hover:translate-x-1">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Shirt className="mx-auto text-[var(--color-gold)]" size={30} strokeWidth={1.3} />
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl text-[var(--color-cream)]">
            Begin Your Commission
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            Every piece starts with a conversation about how you want to
            look, and where you'll wear it. Let's start yours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
