import { Link } from 'react-router-dom';
import { s } from '../lib/style';
import { toRoute } from '../lib/routes';
import { Hoverable } from './Interactive';

const footHover = { color: '#f0e6cf' };
const linkBase = s('display:block;font-size:14px;color:#a99e88;text-decoration:none;margin-bottom:10px');

// footerCols items are either plain strings (Home page — links go nowhere,
// matching the original) or { t, href } objects (Products/Story/Contact).
export default function Footer({ footerCols, marginTop }) {
  return (
    <footer style={s(`background:#0b0805;border-top:1px solid rgba(236,227,208,.08);color:#a99e88${marginTop ? `;margin-top:${marginTop}` : ''}`)}>
      <div style={s('max-width:1180px;margin:0 auto;padding:72px 48px 40px;display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px')}>
        <div>
          <div style={s("font-family:'Bodoni Moda',serif;font-size:24px;color:#f0e6cf;letter-spacing:.05em;margin-bottom:16px")}>MAISON DIYA</div>
          <p style={s('font-weight:300;font-size:14px;line-height:1.7;max-width:280px;margin:0;color:#8a7d60')}>
            Hand-poured candles for festive &amp; corporate gifting. Made in India, gifted everywhere.
          </p>
        </div>
        {footerCols.map((col, i) => (
          <div key={i}>
            <div style={s('font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#c9a24b;margin-bottom:16px')}>{col.h}</div>
            {col.items.map((it, j) => {
              const label = typeof it === 'string' ? it : it.t;
              const href = typeof it === 'string' ? '#' : it.href;
              const route = toRoute(href);
              const as = route === '#' ? 'a' : Link;
              const linkProp = route === '#' ? { href: '#' } : { to: route };
              return (
                <Hoverable key={j} as={as} {...linkProp} base={linkBase} hoverStyle={footHover}>
                  {label}
                </Hoverable>
              );
            })}
          </div>
        ))}
      </div>
      <div style={s('max-width:1180px;margin:0 auto;padding:0 48px 36px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;border-top:1px solid rgba(236,227,208,.08);padding-top:24px;font-size:12px;letter-spacing:.06em;color:#6f6650')}>
        <span>© 2026 Maison Diya. All rights reserved.</span>
        <span>Crafted for the season of light.</span>
      </div>
    </footer>
  );
}
