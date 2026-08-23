import { Link } from 'react-router-dom';

const SECTIONS = [
  { id: 'terms', label: 'Terms of Service' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'returns', label: 'Return Policy' },
];

export default function Policies() {
  return (
    <>
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          The Fine Print
        </span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--color-cream)] sm:text-6xl">
          Policies
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <nav className="flex flex-wrap justify-center gap-6 border-b border-[var(--color-ink)]/10 pb-10">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/60 hover:text-[var(--color-gold)]"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Terms of Service */}
        <div id="terms" className="scroll-mt-24 pt-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
            Terms of Service
          </h2>
          <div className="tape-rule my-6 w-24" />
          <div className="space-y-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-charcoal)]/75">
            <p>
              Thank you for choosing The Dapper Gentleman for your custom
              business and formalwear needs. By accessing our website and
              using our services, you agree to the following terms.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">General Terms.</strong>{' '}
              We reserve the right to modify or discontinue our services at
              any time, and to decline service to anyone, at our
              discretion.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Refunds and Exchanges.</strong>{' '}
              Custom-made products are not eligible for refunds or
              exchanges. Minor tailoring adjustments may be offered on a
              case-by-case basis. Clients who decline a basted fitting, or
              who were not measured by our staff, are not eligible for
              alterations or a remake. If a garment does not fit and
              quality would be compromised by further tailoring, we'll
              provide a replacement at no cost. If payment is made before
              work begins, up to 50% of the invoiced amount may be
              refunded upon cancellation; once garment-making has started,
              no refund is available. Payment is accepted via PayPal
              (international clients), Interac e-Transfer (local clients),
              or invoice.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Unique Garments.</strong>{' '}
              Every garment we create is one of a kind. We don't guarantee
              that any product, service, or information will meet every
              expectation, nor that every error will be correctable after
              the fact.
            </p>
          </div>
        </div>

        {/* Privacy Policy */}
        <div id="privacy" className="scroll-mt-24 border-t border-[var(--color-ink)]/10 pt-16 mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
            Privacy Policy
          </h2>
          <div className="tape-rule my-6 w-24" />
          <div className="space-y-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-charcoal)]/75">
            <p>
              We're committed to protecting your privacy. Here's how we
              handle personal information collected through our website
              and services.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Information We Collect.</strong>{' '}
              Name, email, and shipping address, used to process orders
              and provide support. We don't collect payment information
              directly — that's handled through external payment
              processors.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">How It's Used.</strong>{' '}
              Solely for order processing and customer support.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Sharing.</strong>{' '}
              Shipping addresses may be shared with vendors and shipping
              partners strictly for delivery purposes.
            </p>
          </div>
        </div>

        {/* Return Policy */}
        <div id="returns" className="scroll-mt-24 border-t border-[var(--color-ink)]/10 pt-16 mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-ink)]">
            Return Policy — Off-the-Rack Items
          </h2>
          <div className="tape-rule my-6 w-24" />
          <div className="space-y-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-charcoal)]/75">
            <p>
              This section applies to off-the-rack items only — custom
              commissions are covered under Terms of Service above.
            </p>
            <p>
              Off-the-rack items may be returned within 30 days of
              receipt for a refund, provided the item is unworn, unused,
              still tagged, and in its original packaging, with proof of
              purchase. To start a return, contact{' '}
              <a href="mailto:info@thedappergentleman.ca" className="text-[var(--color-gold)] underline">
                info@thedappergentleman.ca
              </a>. Returns without prior authorization won't be accepted
              — please inspect your order on arrival and reach out right
              away if anything's defective, damaged, or incorrect.
            </p>
            <p>
              Every garment includes the option of a basted fitting. If
              you decline the basted fitting, returns, refunds, and
              exchanges aren't available. If you accept a basted fitting
              and/or are measured by our staff, we'll handle any return
              on a case-by-case basis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-cream)]">
            Questions About These Policies?
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--color-cream)]/70">
            Reach out before you commission — we're happy to walk through
            anything here in plain terms.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
