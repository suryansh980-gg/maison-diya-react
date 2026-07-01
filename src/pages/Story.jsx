import { Link } from 'react-router-dom';
import { s } from '../lib/style';
import { Hoverable } from '../components/Interactive';
import Layout from '../components/Layout';
import { footerCols } from '../data/footerCols';

const goldBtnHover = { background: '#dcb764' };
const outlineBtnHover = { borderColor: '#c9a24b', color: '#fff' };

const steps = [
  { n: '01', t: 'Blend', d: 'Natural soy and coconut wax, melted slow and married with perfumer-grade oils.' },
  { n: '02', t: 'Pour', d: 'Poured by hand into keepsake vessels, in batches small enough to watch over.' },
  { n: '03', t: 'Cure', d: 'Rested for days so the scent settles and the burn stays clean and even.' },
  { n: '04', t: 'Wrap', d: 'Finished, checked, and wrapped as though it were a gift for someone we love.' },
];

const values = [
  { t: 'Made to be kept', d: 'Refillable vessels that outlive the candle — a glass to keep flowers, not throw away.' },
  { t: 'Clean by nature', d: 'Soy and coconut wax with cotton wicks: a slower, cleaner, longer burn.' },
  { t: 'Gifting, first', d: 'Every detail — the scent, the weight, the wrap — designed for the moment it is given.' },
];

export default function Story() {
  return (
    <Layout active="story" footerCols={footerCols}>
      <header style={s('max-width:980px;margin:0 auto;padding:110px 48px 70px;text-align:center')}>
        <div style={s('font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:#c9a24b;margin-bottom:26px')}>Our Story</div>
        <h1 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(46px,6.4vw,94px);line-height:.98;letter-spacing:-.015em;margin:0 0 28px;color:#f3ecdb")}>
          Born of a small flame, <em style={s('font-style:italic;color:#e8cf9a')}>and a long table.</em>
        </h1>
        <p style={s('max-width:560px;margin:0 auto;font-weight:300;font-size:18px;line-height:1.78;color:#a99e88')}>
          Maison Diya began with a single row of diyas on a Diwali windowsill — and the feeling that a flame, given to someone, says more than words. Today we hand-pour that feeling into every candle.
        </p>
      </header>

      <section style={s('max-width:1180px;margin:0 auto;padding:0 48px 30px')}>
        <div style={s('position:relative;aspect-ratio:16/7;overflow:hidden;border:1px solid rgba(236,227,208,.08);background:repeating-linear-gradient(45deg,#241d14,#241d14 12px,#1b150e 12px,#1b150e 24px)')}>
          <div style={s('position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11px;letter-spacing:.26em;text-transform:uppercase;color:#6f6650')}>studio / founder portrait</div>
        </div>
      </section>

      <section style={s('max-width:1180px;margin:0 auto;padding:90px 48px;display:grid;grid-template-columns:.85fr 1.15fr;gap:60px;align-items:start')}>
        <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;padding-top:12px')}>The beginning</div>
        <div>
          <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(28px,3.4vw,46px);line-height:1.12;letter-spacing:-.01em;margin:0 0 26px;color:#f1e9d6")}>
            We wanted gifting to feel <em style={s('font-style:italic;color:#e8cf9a')}>less like a transaction</em> and more like a memory.
          </h2>
          <p style={s('font-weight:300;font-size:16.5px;line-height:1.85;color:#a99e88;margin:0 0 20px')}>
            So we learned to pour. Wax by wax, wick by wick, scent by scent — until a candle could hold an entire occasion inside it. The first batch was for friends. The second was for their friends. We have been quietly growing by word of mouth ever since.
          </p>
          <p style={s('font-weight:300;font-size:16.5px;line-height:1.85;color:#a99e88;margin:0')}>
            Every candle still leaves our Mumbai atelier the same way: poured in small batches, finished by hand, and wrapped as though it were going to someone we love. Because, usually, it is.
          </p>
        </div>
      </section>

      <section style={s('background:#0b0805;border-top:1px solid rgba(236,227,208,.08);border-bottom:1px solid rgba(236,227,208,.08)')}>
        <div style={s('max-width:1180px;margin:0 auto;padding:96px 48px')}>
          <div style={s('text-align:center;margin-bottom:60px')}>
            <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;margin-bottom:16px')}>How it's made</div>
            <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(30px,4vw,52px);margin:0;letter-spacing:-.01em;color:#f3ecdb")}>Four hands, one flame</h2>
          </div>
          <div style={s('display:grid;grid-template-columns:repeat(4,1fr);gap:30px')}>
            {steps.map((st) => (
              <div key={st.n}>
                <div style={s("font-family:'Bodoni Moda',serif;font-style:italic;font-size:30px;color:#c9a24b;margin-bottom:16px")}>{st.n}</div>
                <h3 style={s("font-family:'Bodoni Moda',serif;font-weight:500;font-size:21px;margin:0 0 10px;color:#f1e9d6")}>{st.t}</h3>
                <p style={s('font-weight:300;font-size:14.5px;line-height:1.7;color:#a99e88;margin:0')}>{st.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pull quote */}
      <section style={s('max-width:900px;margin:0 auto;padding:104px 48px;text-align:center')}>
        <div style={s('position:relative;width:30px;height:42px;margin:0 auto 30px')}>
          <div style={s('position:absolute;left:50%;bottom:0;width:30px;height:30px;transform:translateX(-50%);border-radius:5px 5px 9px 9px;background:linear-gradient(95deg,#1b130a,#6a5028 50%,#150e06);box-shadow:inset 0 2px 0 rgba(214,176,96,.4)')} />
          <div style={s('position:absolute;left:50%;bottom:26px;width:11px;height:24px;transform:translateX(-50%);border-radius:50% 50% 46% 46%/82% 82% 36% 36%;background:radial-gradient(50% 60% at 50% 74%,#fffdf2,#ffba42 50%,#f5840e 80%);filter:blur(.5px);animation:storyFlameSway 2.8s ease-in-out infinite')} />
          <div style={s('position:absolute;left:50%;bottom:18px;width:90px;height:90px;transform:translateX(-50%);border-radius:50%;filter:blur(10px);background:radial-gradient(circle,rgba(255,206,120,.5),transparent 68%);animation:storyGlowPulse 5s ease-in-out infinite')} />
        </div>
        <p style={s("font-family:'Bodoni Moda',serif;font-style:italic;font-weight:400;font-size:clamp(24px,3.2vw,40px);line-height:1.35;letter-spacing:-.01em;color:#f3ecdb;margin:0")}>
          "A candle loses nothing by lighting another. That is the whole idea of a gift."
        </p>
        <div style={s('font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#8a7d60;margin-top:26px')}>— The Maison Diya atelier</div>
      </section>

      <section style={s('max-width:1180px;margin:0 auto;padding:0 48px 100px')}>
        <div style={s('display:grid;grid-template-columns:repeat(3,1fr);gap:26px')}>
          {values.map((v, i) => (
            <div key={i} style={s('border:1px solid rgba(236,227,208,.1);background:rgba(28,22,15,.4);backdrop-filter:blur(4px);padding:38px 32px')}>
              <div style={s("font-family:'Bodoni Moda',serif;font-style:italic;font-size:22px;color:#e8cf9a;margin-bottom:14px")}>{v.t}</div>
              <p style={s('font-weight:300;font-size:15px;line-height:1.75;color:#a99e88;margin:0')}>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={s('max-width:1180px;margin:0 auto;padding:0 48px 110px;text-align:center')}>
        <div style={s('border:1px solid rgba(201,162,75,.3);background:rgba(28,22,15,.5);padding:64px 48px;backdrop-filter:blur(4px)')}>
          <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(28px,3.6vw,46px);line-height:1.05;margin:0 0 16px;letter-spacing:-.01em;color:#f3ecdb")}>Light one. Gift one.</h2>
          <p style={s('max-width:440px;margin:0 auto 30px;font-weight:300;font-size:16px;line-height:1.7;color:#a99e88')}>Explore the collection, or tell us about the occasion you're planning for.</p>
          <div style={s('display:flex;gap:16px;justify-content:center;flex-wrap:wrap')}>
            <Hoverable as={Link} to="/products" base={s('background:#c9a24b;color:#100d09;text-decoration:none;padding:15px 32px;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase')} hoverStyle={goldBtnHover}>
              Shop candles
            </Hoverable>
            <Hoverable as={Link} to="/contact" base={s('color:#ece3d0;text-decoration:none;padding:15px 32px;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;border:1px solid rgba(236,227,208,.28)')} hoverStyle={outlineBtnHover}>
              Get in touch
            </Hoverable>
          </div>
        </div>
      </section>
    </Layout>
  );
}
