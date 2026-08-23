export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] pt-14 text-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="tape-rule mb-10" />
        <div className="grid gap-10 pb-10 sm:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl">
              The Dapper Gentleman
            </p>
            <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
              You design, we create. Custom business and formalwear, tailored
              to the person wearing it.
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
              Explore
            </p>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-body)] text-sm text-[var(--color-cream)]/70">
              <li><a className="hover:text-[var(--color-gold)]" href="/services">Services</a></li>
              <li><a className="hover:text-[var(--color-gold)]" href="/pricing">Pricing</a></li>
              <li><a className="hover:text-[var(--color-gold)]" href="/gallery">Gallery</a></li>
              <li><a className="hover:text-[var(--color-gold)]" href="https://consulting.thedappergentleman.ca/">Consulting</a></li>
            </ul>
          </div>

          <div>
            <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-2 font-[family-name:var(--font-body)] text-sm text-[var(--color-cream)]/70">
              <li><a className="hover:text-[var(--color-gold)]" href="/contact">Contact</a></li>
              <li><a className="hover:text-[var(--color-gold)]" href="/policies">Policies</a></li>
              <li>Brampton, Ontario</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-cream)]/10 py-6 text-center font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.12em] text-[var(--color-cream)]/50">
          © {new Date().getFullYear()} The Dapper Gentleman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
