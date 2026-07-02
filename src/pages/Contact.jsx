import { useState } from 'react';
import { s } from '../lib/style';
import { Hoverable, Focusable } from '../components/Interactive';
import Layout from '../components/Layout';
import { footerCols } from '../data/footerCols';
import { supabase } from '../lib/supabase';

const goldBtnHover = { background: '#dcb764' };
const inputFocus = { borderColor: '#c9a24b' };

const lblStyle = 'display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9a8c6c;margin-bottom:8px';
const inStyle = 'width:100%;padding:14px 16px;border:1px solid rgba(236,227,208,.22);background:rgba(16,13,9,.6);font-family:Jost;font-size:15px;color:#ece3d0;outline:none;border-radius:2px;';

const contacts = [
  { label: 'Gifting concierge', value: 'gifts@maisondiya.in', sub: 'For orders, custom scents & bulk' },
  { label: 'Call or WhatsApp', value: '+91 98xxx xxxxx', sub: 'Mon–Sat, 10am – 7pm IST' },
  { label: 'The atelier', value: 'Bandra West, Mumbai', sub: 'Studio visits by appointment' },
  { label: 'Corporate desk', value: 'corporate@maisondiya.in', sub: 'Branded gifting from 25 units' },
];

const initialForm = { name: '', email: '', occasion: 'Diwali', quantity: '1–10', message: '' };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: form.name,
        email: form.email,
        occasion: form.occasion,
        quantity: form.quantity,
        message: form.message,
      });

    setSubmitting(false);

    if (insertError) {
      setError('Something went wrong sending your enquiry. Please try again.');
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout active="contact" footerCols={footerCols} footerMarginTop="60px">
      <section style={s('max-width:1180px;margin:0 auto;padding:90px 48px 60px;display:grid;grid-template-columns:1fr 1.1fr;gap:72px;align-items:start')}>
        <div>
          <div style={s('font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:#c9a24b;margin-bottom:22px')}>Get in touch</div>
          <h1 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(40px,5vw,76px);line-height:.98;letter-spacing:-.015em;margin:0 0 24px;color:#f3ecdb")}>
            Let's plan<br /><em style={s('font-style:italic;color:#e8cf9a')}>your gifting.</em>
          </h1>
          <p style={s('max-width:420px;font-weight:300;font-size:17px;line-height:1.75;color:#a99e88;margin:0 0 44px')}>
            Whether it's a single thoughtful gift or 5,000 branded candles for Diwali, tell us about the occasion — a gifting concierge replies within one business day.
          </p>

          <div style={s('display:grid;gap:26px')}>
            {contacts.map((c, i) => (
              <div key={i} style={s('border-top:1px solid rgba(236,227,208,.14);padding-top:18px')}>
                <div style={s('font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#c9a24b;margin-bottom:8px')}>{c.label}</div>
                <div style={s("font-family:'Bodoni Moda',serif;font-size:21px;color:#f1e9d6;line-height:1.3")}>{c.value}</div>
                <div style={s('font-size:13px;color:#8a7d60;margin-top:4px')}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={s('border:1px solid rgba(201,162,75,.3);background:rgba(28,22,15,.55);backdrop-filter:blur(6px);padding:48px')}>
          {submitted ? (
            <div style={s('text-align:center;padding:48px 12px')}>
              <div style={s('width:64px;height:88px;margin:0 auto 26px;position:relative')}>
                <div style={s('position:absolute;left:50%;bottom:0;width:46px;height:62px;transform:translateX(-50%);border-radius:6px 6px 12px 12px;background:linear-gradient(95deg,#1b130a,#6a5028 50%,#150e06);box-shadow:inset 0 2px 0 rgba(214,176,96,.4)')} />
                <div style={s('position:absolute;left:50%;bottom:54px;width:14px;height:30px;transform:translateX(-50%);transform-origin:50% 100%;border-radius:50% 50% 46% 46%/82% 82% 36% 36%;background:radial-gradient(50% 60% at 50% 74%,#fffdf2,#ffba42 50%,#f5840e 80%);filter:blur(.6px);animation:flameSway 2.8s ease-in-out infinite')} />
                <div style={s('position:absolute;left:50%;bottom:40px;width:120px;height:120px;transform:translateX(-50%);border-radius:50%;filter:blur(10px);background:radial-gradient(circle,rgba(255,206,120,.5),transparent 68%)')} />
              </div>
              <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:32px;margin:0 0 12px;color:#f3ecdb")}>Thank you ✦</h2>
              <p style={s('font-weight:300;font-size:15.5px;line-height:1.7;color:#a99e88;max-width:340px;margin:0 auto')}>
                Your enquiry is lit. A gifting concierge will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={s('display:grid;gap:18px')}>
              <div style={s('display:grid;grid-template-columns:1fr 1fr;gap:18px')}>
                <label style={s('display:block')}>
                  <span style={s(lblStyle)}>Name</span>
                  <Focusable required type="text" placeholder="Your name" value={form.name} onChange={set('name')} base={s(inStyle)} focusStyle={inputFocus} />
                </label>
                <label style={s('display:block')}>
                  <span style={s(lblStyle)}>Email</span>
                  <Focusable required type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} base={s(inStyle)} focusStyle={inputFocus} />
                </label>
              </div>
              <div style={s('display:grid;grid-template-columns:1fr 1fr;gap:18px')}>
                <label style={s('display:block')}>
                  <span style={s(lblStyle)}>Occasion</span>
                  <Focusable as="select" value={form.occasion} onChange={set('occasion')} base={s(inStyle)} focusStyle={inputFocus}>
                    <option>Diwali</option>
                    <option>Wedding</option>
                    <option>Corporate / bulk</option>
                    <option>Housewarming</option>
                    <option>Personal gift</option>
                    <option>Other</option>
                  </Focusable>
                </label>
                <label style={s('display:block')}>
                  <span style={s(lblStyle)}>Quantity</span>
                  <Focusable as="select" value={form.quantity} onChange={set('quantity')} base={s(inStyle)} focusStyle={inputFocus}>
                    <option>1–10</option>
                    <option>11–25</option>
                    <option>25–100</option>
                    <option>100–1,000</option>
                    <option>1,000+</option>
                  </Focusable>
                </label>
              </div>
              <label style={s('display:block')}>
                <span style={s(lblStyle)}>Tell us about it</span>
                <Focusable
                  as="textarea"
                  rows={4}
                  placeholder="Timeline, branding, budget, anything else…"
                  value={form.message}
                  onChange={set('message')}
                  base={s(inStyle + 'resize:vertical;font-family:Jost')}
                  focusStyle={inputFocus}
                />
              </label>
              <Hoverable
                as="button"
                type="submit"
                disabled={submitting}
                base={s(`background:#c9a24b;color:#100d09;border:none;padding:16px 30px;font-family:Jost;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;cursor:${submitting ? 'default' : 'pointer'};margin-top:4px;opacity:${submitting ? '.7' : '1'}`)}
                hoverStyle={submitting ? {} : goldBtnHover}
              >
                {submitting ? 'Sending…' : 'Send enquiry'}
              </Hoverable>
              {error && (
                <p style={s('font-size:12.5px;color:#e08a6a;text-align:center;margin:2px 0 0;letter-spacing:.04em')}>{error}</p>
              )}
              <p style={s('font-size:11.5px;color:#6f6650;text-align:center;margin:2px 0 0;letter-spacing:.04em')}>We reply within one business day. No spam, ever.</p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
