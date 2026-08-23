import { Link } from 'react-router-dom';
import { Compass, HandHeart, Gem } from 'lucide-react';
import founderFitting from '../assets/founder-fitting.jpg';

const VALUES = [
  {
    icon: Compass,
    title: 'Precision',
    copy: 'Every measurement, every seam, every button placement is deliberate. Nothing is off-the-rack thinking dressed up as custom.',
  },
  {
    icon: HandHeart,
    title: 'Partnership',
    copy: "You lead the design. We bring the craft to make it real — a conversation first, a garment second.",
  },
  {
    icon: Gem,
    title: 'Provenance',
    copy: 'Fabric and construction chosen for how they age, not just how they photograph on day one.',
  },
];

export default function About() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          Our Story
        </span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--color-cream)] sm:text-6xl">
          About The Dapper Gentleman
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl leading-snug text-[var(--color-ink)] sm:text-4xl">
              Founded in Brampton in 2019, The Dapper Gentleman was built on
              a simple belief: a well-made garment should reflect the man
              wearing it, not the rack it came from.
            </p>
            <div className="tape-rule my-10 w-32" />
            <div className="space-y-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-[var(--color-charcoal)]/75">
              <p>
                We work with professional men across the GTA — and
                virtually, wherever they are — who want their clothing to
                carry the same precision they bring to their work. That
                means custom suiting and shirting built from your
                measurements, style consulting for the man who wants a
                second eye on getting it right, and corporate and uniform
                programs for teams that need to look unified without
                looking generic.
              </p>
              <p>
                The aesthetic draws from an era when formalwear had a point
                of view — the tailored elegance of mid-century film, where
                a suit said something about the man in it before he ever
                spoke. We build toward that same quiet confidence,
                translated for how men dress and work today.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 border border-[var(--color-gold)]/40" />
            <img
              src={founderFitting}
              alt="Nicholas Russell taking a client's measurements, swatch books and button samples on the table"
              className="w-full object-cover shadow-xl"
            />
            <p className="mt-4 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-charcoal)]/50">
              A fitting in progress — precision starts here
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
              How We Work
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-[var(--color-ink)]">
              What Guides Every Commission
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="text-center">
                <Icon className="mx-auto text-[var(--color-gold)]" size={26} strokeWidth={1.5} />
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

      <section className="border-y border-[var(--color-ink)]/10 bg-[var(--color-cream)] py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 text-center sm:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-gold)]">2019</p>
            <p className="mt-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-charcoal)]/60">
              Founded in Brampton
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-gold)]">GTA</p>
            <p className="mt-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-charcoal)]/60">
              Plus virtual, anywhere
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-gold)]">4</p>
            <p className="mt-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-charcoal)]/60">
              Core services offered
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-cream)]">
            Ready to Start the Conversation?
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            Tell us what you're building toward, and we'll tell you how we'd
            build it with you.
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
