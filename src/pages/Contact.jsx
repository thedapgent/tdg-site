import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaewkvge';

const SERVICE_OPTIONS = [
  'Custom Suiting & Shirting',
  'Style Consulting',
  'Corporate & Uniform Programs',
  'Alterations',
  'Not sure yet',
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="bg-[var(--color-ink)] py-20 text-center">
        <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
          Get in Touch
        </span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl text-[var(--color-cream)] sm:text-6xl">
          Contact
        </h1>
        <p className="mx-auto mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm text-[var(--color-cream)]/70">
          Precision starts with a conversation. Tell us what you're looking
          to build.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          {/* Info column */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
              Reach Us Directly
            </h2>
            <div className="tape-rule my-6 w-24" />
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-[var(--color-gold)]" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.12em] text-[var(--color-charcoal)]/50">
                    Email
                  </p>
                  <a
                    href="mailto:info@thedappergentleman.ca"
                    className="font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)] hover:text-[var(--color-gold)]"
                  >
                    info@thedappergentleman.ca
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-[var(--color-gold)]" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.12em] text-[var(--color-charcoal)]/50">
                    Location
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)]">
                    Brampton, Ontario — serving the GTA, plus virtual
                    consultations anywhere.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-[var(--color-gold)]" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.12em] text-[var(--color-charcoal)]/50">
                    Response Time
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)]">
                    We typically reply within 1–2 business days.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 border-t border-[var(--color-ink)]/10 pt-8">
              <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.12em] text-[var(--color-charcoal)]/50">
                Looking for Style Consulting?
              </p>
              <a
                href="https://consulting.thedappergentleman.ca/"
                className="mt-2 inline-block font-[family-name:var(--font-body)] text-sm text-[var(--color-gold)] underline underline-offset-2"
              >
                Book a free discovery call →
              </a>
            </div>
          </div>

          {/* Form column */}
          <div>
            {status === 'success' ? (
              <div className="border border-[var(--color-gold)]/40 bg-[var(--color-parchment)] p-10 text-center">
                <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
                  Message sent.
                </p>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)]/70">
                  Thank you — we'll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] text-[var(--color-charcoal)]/60">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full border border-[var(--color-ink)]/20 bg-[var(--color-parchment)] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] text-[var(--color-charcoal)]/60">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full border border-[var(--color-ink)]/20 bg-[var(--color-parchment)] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] text-[var(--color-charcoal)]/60">
                    What are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full border border-[var(--color-ink)]/20 bg-[var(--color-parchment)] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] text-[var(--color-charcoal)]/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full border border-[var(--color-ink)]/20 bg-[var(--color-parchment)] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--color-charcoal)] outline-none focus:border-[var(--color-gold)]"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-[family-name:var(--font-body)] text-xs text-red-700">
                    Something went wrong sending your message — please try
                    again, or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-sm bg-[var(--color-gold)] px-8 py-3.5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)] disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
