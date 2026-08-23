import { Link } from 'react-router-dom';
import { Scissors, Ruler, Users, Wrench } from 'lucide-react';

const SERVICES = [
  {
    icon: Scissors,
    title: 'Custom Suiting & Shirting',
    copy: 'Suits, sport coats, trousers, and shirts built entirely to your measurements — fabric, canvas, lapel, lining, and every detail chosen with you, not for you.',
    points: ['Full canvas or half canvas construction', 'Hundreds of fabric and lining options', 'Two to three fittings per commission'],
  },
  {
    icon: Ruler,
    title: 'Style Consulting',
    copy: "One-on-one sessions on fit, wardrobe building, and dressing with intention — for the man who wants a second, trained eye before he buys or builds anything.",
    points: ['Wardrobe audits and gap analysis', 'Occasion-specific outfitting', 'Virtual or in-person sessions'],
  },
  {
    icon: Users,
    title: 'Corporate & Uniform Programs',
    copy: 'Consistent, professional formalwear for teams — from front-of-house staff to leadership — without looking like it came off a rack.',
    points: ['Volume pricing for teams', 'Consistent house style across staff', 'Ongoing replenishment as teams grow'],
  },
  {
    icon: Wrench,
    title: 'Alterations',
    copy: "Precision adjustments to garments you already own — because fit is the difference between a suit that hangs on you and one that's built for you.",
    points: ['Jacket and trouser resizing', 'Shirt tailoring', 'Fit correction on off-the-rack pieces'],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          What We Offer
        </span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--color-cream)] sm:text-6xl">
          Services
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm text-[var(--color-cream)]/70">
          Four ways to work with us — from a single garment to outfitting a
          whole team.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-16">
          {SERVICES.map(({ icon: Icon, title, copy, points }, i) => (
            <div
              key={title}
              className={`grid gap-8 sm:grid-cols-[auto_1fr] ${i !== 0 ? 'border-t border-[var(--color-ink)]/10 pt-16' : ''}`}
            >
              <div className="flex sm:block">
                <Icon className="text-[var(--color-gold)]" size={32} strokeWidth={1.4} />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
                  {title}
                </h2>
                <p className="mt-3 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--color-charcoal)]/75">
                  {copy}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] text-[var(--color-charcoal)]/60"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
            The Process
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
            How a Commission Comes Together
          </h2>
          <div className="mt-14 grid gap-10 text-left sm:grid-cols-3">
            {[
              { step: 'Consult', copy: 'We talk through what you need it for, how you want to look, and what fits your budget.' },
              { step: 'Fit & Build', copy: 'Measurements are taken, fabric and details are chosen, and the garment is built across two to three fittings.' },
              { step: 'Wear', copy: 'You leave with a finished piece built to your body and your standards — not adjusted toward them.' },
            ].map(({ step, copy }) => (
              <div key={step}>
                <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-gold)]">{step}</p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-charcoal)]/70">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-cream)]">
            Not Sure Which Service Fits?
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            Tell us what you're dressing for, and we'll point you toward the
            right starting point.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)]"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
