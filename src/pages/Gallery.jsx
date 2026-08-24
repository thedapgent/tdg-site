import { useState } from 'react';
import { Link } from 'react-router-dom';
import founderFitting from '../assets/founder-fitting.jpg';
import suitingTux from '../assets/suiting-tux-fitting.jpg';
import shirtingCollar from '../assets/shirting-houndstooth-collar.jpg';
import suitingEditorial from '../assets/suiting-editorial-plaid.jpg';
import suitingShoeDetail from '../assets/suiting-shoe-detail.jpg';
import editorialBriefcase from '../assets/editorial-briefcase.jpg';
import editorialRedCanopy from '../assets/editorial-red-canopy.jpg';
import detailCuffWatch from '../assets/detail-cuff-watch.jpg';
import detailButtoning from '../assets/detail-buttoning.jpg';

const CATEGORIES = ['All', 'Suiting', 'Shirting', 'Fittings', 'Corporate', 'Editorial', 'Details'];

const ITEMS = [
  { img: suitingEditorial, category: 'Suiting', caption: 'Double-breasted plaid suit — editorial' },
  { img: suitingTux, category: 'Suiting', caption: 'Velvet tuxedo — wedding commission' },
  { img: shirtingCollar, category: 'Shirting', caption: 'Houndstooth shirt with contrast collar and cuff' },
  { img: founderFitting, category: 'Fittings', caption: 'A fitting in progress — swatches and buttons on the table' },
  { placeholder: true, category: 'Corporate', caption: 'Team uniform program — coming soon' },
  { placeholder: true, category: 'Fittings', caption: 'Client fitting — coming soon' },
  { img: editorialBriefcase, category: 'Editorial', caption: 'Plaid double-breasted suit, city backdrop' },
  { img: editorialRedCanopy, category: 'Editorial', caption: 'Plaid suit against architectural red canopy' },
  { img: suitingShoeDetail, category: 'Details', caption: 'Branded sole and trouser break' },
  { img: detailCuffWatch, category: 'Details', caption: 'Cuff, watch, and ring detail' },
  { img: detailButtoning, category: 'Details', caption: 'Buttoning the jacket — cufflink detail' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <>
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          The Work
        </span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--color-cream)] sm:text-6xl">
          Gallery
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm text-[var(--color-cream)]/70">
          A growing record of commissions, fittings, and finished work.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-sm border px-4 py-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.12em] transition-colors ${
                active === cat
                  ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-ink)]'
                  : 'border-[var(--color-ink)]/20 text-[var(--color-charcoal)]/70 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) =>
            item.placeholder ? (
              <div
                key={i}
                className="flex aspect-[4/5] flex-col items-center justify-center border border-dashed border-[var(--color-ink)]/20 bg-[var(--color-parchment)] p-6 text-center"
              >
                <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">
                  {item.category}
                </span>
                <p className="mt-3 font-[family-name:var(--font-body)] text-xs text-[var(--color-charcoal)]/45">
                  {item.caption}
                </p>
              </div>
            ) : (
              <figure key={i} className="group relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-ink)]/90 to-transparent px-4 pb-3 pt-10 font-[family-name:var(--font-body)] text-xs text-[var(--color-cream)] opacity-0 transition-opacity group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            )
          )}
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-cream)]">
            Your Commission Could Be Next
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            Every piece here started as a conversation. Let's start yours.
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
