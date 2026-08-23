import { Link } from 'react-router-dom';

const GARMENTS = [
  { name: 'Fully Handmade Suits', price: '$2,500+' },
  { name: 'Custom Suits (Half / Full Canvas)', price: '$845+' },
  { name: 'Sport Coats', price: '$665+' },
  { name: 'Trousers', price: '$295+' },
  { name: 'Waistcoats', price: '$255+' },
  { name: 'Dress Shirts', price: '$225+' },
  { name: 'Overcoats', price: '$895+' },
  { name: 'Ladies Wear (HER x TDG)', price: 'On request' },
];

const OTHER = [
  { name: 'Style Consultation', price: 'Free discovery call, then $150+/session', href: 'https://consulting.thedappergentleman.ca/' },
  { name: 'Corporate & Uniform Programs', price: 'Quoted by team size' },
  { name: 'Alterations', price: 'Quoted per garment' },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          Investment
        </span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--color-cream)] sm:text-6xl">
          Pricing
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm text-[var(--color-cream)]/70">
          Starting points, not final quotes. Every commission is priced at
          consultation based on fabric, construction, and detail.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
          Garments
        </h2>
        <div className="tape-rule my-6 w-24" />
        <ul className="space-y-4">
          {GARMENTS.map(({ name, price }) => (
            <li key={name} className="flex items-baseline gap-3">
              <span className="whitespace-nowrap font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)]">
                {name}
              </span>
              <span className="h-px flex-1 translate-y-[-3px] border-b border-dotted border-[var(--color-ink)]/25" />
              <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-lg text-[var(--color-gold)]">
                {price}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
          Services
        </h2>
        <div className="tape-rule my-6 w-24" />
        <ul className="space-y-4">
          {OTHER.map(({ name, price, href }) => (
            <li key={name} className="flex flex-wrap items-baseline gap-3">
              <span className="whitespace-nowrap font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)]">
                {name}
              </span>
              <span className="h-px flex-1 translate-y-[-3px] border-b border-dotted border-[var(--color-ink)]/25" />
              <span className="whitespace-nowrap font-[family-name:var(--font-body)] text-sm text-[var(--color-gold)]">
                {price}
              </span>
              {href && (
                <a
                  href={href}
                  className="ml-auto whitespace-nowrap font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] text-[var(--color-ink)]/60 underline decoration-[var(--color-gold)]/50 underline-offset-2 hover:text-[var(--color-gold)]"
                >
                  Details →
                </a>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-14 font-[family-name:var(--font-body)] text-xs leading-relaxed text-[var(--color-charcoal)]/55">
          A 50% non-refundable deposit secures your commission, with the
          balance due at final fitting. Exact pricing depends on fabric
          selection, construction (half vs. full canvas), and any custom
          detailing discussed during your consultation.
        </p>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-cream)]">
            Get a Quote for Your Commission
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            Book a consultation and we'll walk through fabric, construction,
            and timeline — then give you a firm price.
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
