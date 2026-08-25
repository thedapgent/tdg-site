import { Link } from 'react-router-dom';
import { Cross, BookOpen, Shirt } from 'lucide-react';

const SERVICES = [
  {
    icon: Cross,
    title: 'Vestments & Robes',
    copy: 'Preaching robes and clergy vestments built to your measurements, in fabrics chosen for how they move and hold up under regular wear.',
  },
  {
    icon: Shirt,
    title: 'Clergy Suiting',
    copy: 'Custom suits for the pulpit and beyond — the same precision tailoring as our menswear, adapted for clergy dress standards.',
  },
  {
    icon: BookOpen,
    title: 'Stoles & Accessories',
    copy: 'Custom stoles and finishing details, made to complement a full vestment or worn on their own.',
  },
];

export default function OfTheCloth() {
  return (
    <>
      {/* Hero — light, minimalist, distinct from TDG's navy hero */}
      <section className="border-b border-[var(--color-ink)]/10 bg-[var(--color-parchment)] py-28 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          Of the Cloth
        </span>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl text-[var(--color-ink)] sm:text-6xl">
          Tailored for the Called
        </h1>
        <div className="tape-rule mx-auto my-8 w-32" />
        <p className="mx-auto max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--color-charcoal)]/70">
          A clergy garment line from The Dapper Gentleman — vestments,
          robes, and clergy suiting built with the same precision as our
          menswear, for those who serve.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-block rounded-sm bg-[var(--color-ink)] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-cream)] transition-colors hover:bg-[var(--color-ink-2)]"
        >
          Inquire About a Commission
        </Link>
      </section>

      {/* Brand statement */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-[family-name:var(--font-display)] text-3xl leading-snug text-[var(--color-ink)] sm:text-4xl">
          Ministry deserves clothing built with the same care as the calling
          itself — precise, dignified, and made to last.
        </p>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-parchment)] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="text-center">
                <Icon className="mx-auto text-[var(--color-gold)]" size={28} strokeWidth={1.4} />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                  {title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-charcoal)]/70">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser — honest placeholders, no real photos yet */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
            The Work
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
            Recent Commissions
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {['Preaching robe', 'Clergy suit', 'Custom stole'].map((label) => (
            <div
              key={label}
              className="flex aspect-[4/5] flex-col items-center justify-center border border-dashed border-[var(--color-ink)]/20 bg-[var(--color-parchment)] p-6 text-center"
            >
              <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">
                {label}
              </span>
              <p className="mt-3 font-[family-name:var(--font-body)] text-xs text-[var(--color-charcoal)]/45">
                Coming soon
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Of the Cloth
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-[var(--color-cream)]">
            Tailored for the Called
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            A division of The Dapper Gentleman. Reach out to start your
            commission.
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
