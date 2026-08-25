import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/of-the-cloth', label: 'Of the Cloth' },
  { to: '/policies', label: 'Policies' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-ink)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[var(--color-cream)]"
        >
          The Dapper Gentleman
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `whitespace-nowrap font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.1em] transition-colors lg:text-[13px] lg:tracking-[0.14em] ${
                  isActive
                    ? 'text-[var(--color-gold)]'
                    : 'text-[var(--color-cream)]/80 hover:text-[var(--color-gold)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://consulting.thedappergentleman.ca/"
            className="whitespace-nowrap rounded-sm border border-[var(--color-gold)] px-3 py-2 font-[family-name:var(--font-body)] text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] lg:px-4 lg:text-[12px] lg:tracking-[0.14em]"
          >
            Consulting
          </a>
        </nav>

        <button
          className="text-[var(--color-cream)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--color-gold)]/20 px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.14em] ${
                  isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-cream)]/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://consulting.thedappergentleman.ca/"
            className="mt-2 py-3 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.14em] text-[var(--color-gold)]"
          >
            Consulting →
          </a>
        </nav>
      )}
    </header>
  );
}
