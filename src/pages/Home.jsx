import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { s } from '../lib/style';
import { Hoverable } from '../components/Interactive';
import Layout from '../components/Layout';

const goldBtnHover = { background: '#dcb764' };
const outlineBtnHover = { borderColor: '#c9a24b', color: '#fff' };
const collHover = { transform: 'translateY(-5px)', borderColor: 'rgba(201,162,75,.45)' };

const collections = [
  { t: 'Diwali', d: 'Lamps relit', label: 'Festive' },
  { t: 'Weddings', d: 'Gifts in pairs', label: 'Ceremony' },
  { t: 'Housewarming', d: 'New beginnings', label: 'Griha Pravesh' },
  { t: 'Corporate', d: 'Branded at scale', label: 'Business' },
];

const corpStats = [
  { k: '25+', v: 'Min. units' },
  { k: '48hr', v: 'Sample turnaround' },
  { k: 'Pan-India', v: 'Fulfilment' },
];

const craft = [
  { n: 'Soy + coconut', t: 'Clean, slow burn' },
  { n: '50 hours', t: 'Average burn time' },
  { n: 'Refillable', t: 'Vessels to keep' },
];

const footerCols = [
  { h: 'Shop', items: ['All candles', 'Festive edit', 'Gift sets', 'Refills'] },
  { h: 'Gifting', items: ['Corporate', 'Weddings', 'Bulk enquiry', 'Custom scent'] },
  { h: 'Maison', items: ['Our story', 'Stockists', 'Contact', 'Care guide'] },
];

function smooth(x, a, b) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

export default function Home() {
  const introRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const root = introRef.current;
      if (!root) return;
      const y = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight || 1;
      const ip = Math.min(1, Math.max(0, y / (vh * 0.85)));

      const stage = root.querySelector('#candleStage');
      const tilt = root.querySelector('#candleTilt');
      const flame = root.querySelector('#flameWrap');
      const halo = root.querySelector('#glowHalo');
      const t1 = root.querySelector('#introT1');
      const cue = root.querySelector('#scrollCue');

      if (stage) {
        stage.style.transform = 'translateY(' + (-ip * 28).toFixed(1) + 'px) scale(' + (1 - ip * 0.06).toFixed(3) + ')';
        stage.style.opacity = (1 - smooth(ip, 0.84, 1)).toFixed(3);
        stage.style.filter = 'brightness(' + (1 + ip * 0.55).toFixed(2) + ') saturate(' + (1 + ip * 0.2).toFixed(2) + ')';
      }
      if (tilt) tilt.style.transform = 'rotate(' + (ip * 20).toFixed(2) + 'deg)';
      if (flame) flame.style.transform = 'translateX(-50%) rotate(' + (-ip * 36).toFixed(2) + 'deg)';
      if (halo) halo.style.opacity = Math.min(1.1, 0.45 + ip * 0.85).toFixed(2);
      if (t1) {
        t1.style.opacity = (1 - smooth(ip, 0.0, 0.5)).toFixed(3);
        t1.style.transform = 'translateY(' + (-ip * 30).toFixed(1) + 'px)';
      }
      if (cue) cue.style.opacity = (1 - smooth(ip, 0.02, 0.2)).toFixed(3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Layout active="home" footerCols={footerCols}>
      {/* ===== CINEMATIC INTRO ===== */}
      <section ref={introRef} id="intro" style={s('position:relative;height:100vh;overflow:hidden')}>
        <div style={s('position:absolute;inset:0;overflow:hidden')}>
          <div style={s('position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);perspective:1600px')}>
            <div id="candleStage" style={s('position:relative;width:300px;height:440px;will-change:transform,filter')}>
              <div id="glowHalo" style={s('position:absolute;left:50%;top:8px;width:520px;height:520px;transform:translateX(-50%);border-radius:50%;filter:blur(8px);background:radial-gradient(circle,rgba(255,206,120,.55) 0%,rgba(214,150,60,.28) 30%,rgba(150,95,35,.12) 52%,transparent 70%);animation:glowPulse 5.5s ease-in-out infinite')} />

              <div id="candleTilt" style={s('position:absolute;left:0;right:0;bottom:0;height:100%;transform-origin:50% 92%;will-change:transform,filter')}>
                <div id="flameWrap" style={s('position:absolute;left:50%;bottom:214px;transform:translateX(-50%);transform-origin:50% 100%;will-change:transform')}>
                  <div style={s('position:absolute;left:50%;bottom:-36px;width:178px;height:200px;transform:translateX(-50%);border-radius:50%;filter:blur(11px);background:radial-gradient(circle at 50% 58%,rgba(255,203,108,.82) 0%,rgba(235,150,50,.4) 34%,rgba(150,90,30,.14) 60%,transparent 76%);mix-blend-mode:screen;animation:glowPulse 4.2s ease-in-out infinite')} />
                  <div style={s('position:relative;width:48px;height:132px;transform-origin:50% 100%;animation:flameSway 2.8s ease-in-out infinite')}>
                    <div style={s('position:absolute;left:50%;bottom:0;width:46px;height:128px;transform:translateX(-50%);border-radius:50% 50% 46% 46%/90% 90% 32% 32%;background:radial-gradient(50% 62% at 50% 76%,rgba(255,166,44,.5),rgba(226,114,22,.32) 52%,rgba(170,70,12,0) 80%);filter:blur(3.4px);mix-blend-mode:screen')} />
                    <div style={s('position:absolute;left:50%;bottom:2px;width:30px;height:108px;transform:translateX(-50%);border-radius:50% 50% 46% 46%/88% 88% 34% 34%;background:radial-gradient(52% 58% at 50% 78%,#ffeeb0,#ffba42 40%,#f5840e 68%,rgba(206,84,10,0) 88%);filter:blur(1.5px);mix-blend-mode:screen')} />
                    <div style={s('position:absolute;left:50%;bottom:8px;width:15px;height:66px;transform:translateX(-50%);border-radius:50% 50% 45% 45%/82% 82% 36% 36%;background:radial-gradient(50% 60% at 50% 74%,#fffdf2,#ffe69e 44%,rgba(255,200,90,0) 82%);filter:blur(.8px);mix-blend-mode:screen;animation:coreFlicker 1.5s ease-in-out infinite')} />
                    <div style={s('position:absolute;left:50%;bottom:11px;width:8px;height:28px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle,#ffffff,rgba(255,250,230,0) 72%);filter:blur(.6px);mix-blend-mode:screen')} />
                    <div style={s('position:absolute;left:50%;bottom:-1px;width:22px;height:20px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle,rgba(122,170,255,.65),rgba(90,140,240,0) 72%);filter:blur(1.6px);mix-blend-mode:screen')} />
                  </div>
                </div>

                <div style={s('position:absolute;left:50%;bottom:198px;width:2px;height:18px;transform:translateX(-50%);background:linear-gradient(#120d07 30%,#3a2a14);border-radius:2px')} />

                <div style={s('position:absolute;left:50%;bottom:0;width:166px;height:216px;transform:translateX(-50%);border-radius:8px 8px 20px 20px;overflow:hidden;background:linear-gradient(95deg,#070403 0%,#1b130a 14%,#392b18 33%,#6a5028 50%,#3b2c19 65%,#150e06 85%,#050302 100%);box-shadow:inset 0 3px 0 rgba(214,176,96,.4),0 38px 66px -28px rgba(0,0,0,.85)')}>
                  <div style={s('position:absolute;left:50%;top:-12px;width:158px;height:130px;transform:translateX(-50%);background:radial-gradient(ellipse 50% 62% at 50% 0%,rgba(255,196,96,.5),rgba(255,170,60,0) 72%);mix-blend-mode:screen')} />
                  <div style={s('position:absolute;left:30px;top:12px;width:13px;height:188px;border-radius:50%;background:linear-gradient(180deg,rgba(255,242,214,.55),rgba(255,242,214,.04));filter:blur(2.4px);opacity:.75')} />
                  <div style={s('position:absolute;right:26px;top:20px;width:6px;height:168px;border-radius:50%;background:linear-gradient(180deg,rgba(255,236,202,.32),rgba(255,236,202,0));filter:blur(2.4px)')} />
                  <div style={s('position:absolute;left:11px;right:11px;top:6px;height:22px;border-radius:50%;background:radial-gradient(ellipse at 50% 28%,#7d6038 0%,#4a3a22 50%,#281d11 100%);box-shadow:inset 0 3px 7px rgba(0,0,0,.65),inset 0 -2px 5px rgba(255,200,110,.3)')} />
                  <div style={s('position:absolute;left:50%;top:9px;width:34px;height:10px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(ellipse,rgba(255,214,130,.92),rgba(255,180,80,0) 76%);filter:blur(1.2px)')} />
                  <div style={s('position:absolute;left:7px;right:7px;top:3px;height:11px;border-radius:50%;border-top:1px solid rgba(214,176,96,.5);border-left:1px solid rgba(214,176,96,.5);border-right:1px solid rgba(214,176,96,.5)')} />
                  <div style={s('position:absolute;left:50%;bottom:38px;transform:translateX(-50%);text-align:center;width:140px')}>
                    <div style={s("font-family:'Bodoni Moda',serif;font-style:italic;font-size:15px;letter-spacing:.03em;color:#e4c486")}>Maison Diya</div>
                    <div style={s('font-size:7.5px;letter-spacing:.3em;text-transform:uppercase;color:rgba(228,196,134,.7);margin-top:5px')}>No. 01 · Saffron &amp; Oud</div>
                  </div>
                </div>
                <div style={s('position:absolute;left:50%;bottom:-22px;width:220px;height:44px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(ellipse,rgba(255,178,86,.2),transparent 70%);filter:blur(7px)')} />
              </div>
            </div>
          </div>

          <div id="introT1" style={s('position:absolute;left:0;right:0;top:15%;text-align:center;padding:0 24px;will-change:transform,opacity')}>
            <div style={s('font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:#c9a24b;margin-bottom:22px')}>The Festival of Light · 2026</div>
            <h1 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(48px,7.4vw,108px);line-height:.94;letter-spacing:-.015em;margin:0;color:#f3ecdb")}>
              Light that <em style={s('font-style:italic;color:#e8cf9a')}>carries</em><br />a wish.
            </h1>
          </div>

          <div id="scrollCue" style={s('position:absolute;left:50%;bottom:30px;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:10px')}>
            <span style={s('font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#8a7d60')}>Scroll</span>
            <span style={s('width:1px;height:46px;background:#c9a24b;animation:cue 2.4s ease-in-out infinite')} />
          </div>
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section id="intro-text" style={s('max-width:1180px;margin:0 auto;padding:48px 48px 40px')}>
        <div style={s('display:grid;grid-template-columns:.85fr 1.15fr;gap:60px;align-items:start')}>
          <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;padding-top:14px')}>01 — The House</div>
          <div>
            <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(30px,3.6vw,50px);line-height:1.12;letter-spacing:-.01em;margin:0 0 30px;color:#f1e9d6")}>
              A candle is the quietest way to say <em style={s('font-style:italic;color:#e8cf9a')}>I thought of you.</em> We make ours slowly — natural wax, perfumer-grade oils, vessels meant to be kept.
            </h2>
            <div style={s('display:flex;gap:18px;flex-wrap:wrap;margin-bottom:46px')}>
              <Hoverable as={Link} to="/products" base={s('color:#100d09;background:#c9a24b;text-decoration:none;padding:15px 30px;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase')} hoverStyle={goldBtnHover}>
                Shop the festive edit
              </Hoverable>
              <Hoverable as="a" href="#corporate" base={s('color:#ece3d0;text-decoration:none;padding:15px 30px;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;border:1px solid rgba(236,227,208,.28)')} hoverStyle={outlineBtnHover}>
                Corporate gifting
              </Hoverable>
            </div>
            <div style={s('display:grid;grid-template-columns:repeat(3,1fr);gap:24px;border-top:1px solid rgba(236,227,208,.14);padding-top:26px')}>
              {craft.map((f, i) => (
                <div key={i}>
                  <div style={s("font-family:'Bodoni Moda',serif;font-style:italic;font-size:24px;color:#e8cf9a;margin-bottom:6px")}>{f.n}</div>
                  <div style={s('font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:#9a8c6c')}>{f.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* festive collections */}
      <section id="collections" style={s('max-width:1180px;margin:0 auto;padding:96px 48px 30px')}>
        <div style={s('display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:46px;flex-wrap:wrap;gap:18px')}>
          <div>
            <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;margin-bottom:16px')}>02 — Gift by occasion</div>
            <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(30px,4vw,52px);line-height:1.02;margin:0;letter-spacing:-.01em;color:#f1e9d6")}>An edit for every celebration</h2>
          </div>
          <Link to="/products" style={s('font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:#ece3d0;text-decoration:none;border-bottom:1px solid #c9a24b;padding-bottom:5px')}>View all candles →</Link>
        </div>
        <div style={s('display:grid;grid-template-columns:repeat(4,1fr);gap:18px')}>
          {collections.map((c, i) => (
            <Hoverable
              key={i}
              as={Link}
              to="/products"
              base={s('position:relative;display:block;text-decoration:none;aspect-ratio:3/4;overflow:hidden;background:repeating-linear-gradient(45deg,#241d14,#241d14 10px,#1b150e 10px,#1b150e 20px);border:1px solid rgba(236,227,208,.08)')}
              hoverStyle={collHover}
            >
              <div style={s('position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,13,8,.1) 30%,rgba(12,9,5,.85) 100%)')} />
              <div style={s('position:absolute;top:14px;left:14px;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:#6f6650')}>{c.label}</div>
              <div style={s('position:absolute;left:18px;right:18px;bottom:18px')}>
                <div style={s("font-family:'Bodoni Moda',serif;font-size:25px;line-height:1;color:#f3ecdb")}>{c.t}</div>
                <div style={s('font-size:11.5px;letter-spacing:.08em;color:#c9a24b;margin-top:7px')}>{c.d}</div>
              </div>
            </Hoverable>
          ))}
        </div>
      </section>

      {/* corporate band */}
      <section id="corporate" style={s('background:#0b0805;border-top:1px solid rgba(236,227,208,.08);border-bottom:1px solid rgba(236,227,208,.08)')}>
        <div style={s('max-width:1180px;margin:0 auto;padding:110px 48px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center')}>
          <div>
            <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;margin-bottom:22px')}>04 — Corporate &amp; Bulk Gifting</div>
            <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(32px,4.2vw,56px);line-height:1.04;margin:0 0 24px;letter-spacing:-.01em;color:#f3ecdb")}>Gifts that say your name beautifully.</h2>
            <p style={s('max-width:460px;font-weight:300;font-size:16.5px;line-height:1.75;color:#a99e88;margin:0 0 34px')}>
              Branded candles, curated hampers and custom scents for Diwali, onboarding and client appreciation. White-glove fulfilment, pan-India — from 25 units to 25,000.
            </p>
            <div style={s('display:flex;gap:42px;margin-bottom:38px;flex-wrap:wrap')}>
              {corpStats.map((st, i) => (
                <div key={i}>
                  <div style={s("font-family:'Bodoni Moda',serif;font-size:38px;color:#e8cf9a")}>{st.k}</div>
                  <div style={s('font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8a7d60;margin-top:4px')}>{st.v}</div>
                </div>
              ))}
            </div>
            <Hoverable as={Link} to="/contact" base={s('background:#c9a24b;color:#100d09;text-decoration:none;padding:16px 32px;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;display:inline-block')} hoverStyle={goldBtnHover}>
              Request a gifting deck
            </Hoverable>
          </div>
          <div style={s('position:relative;aspect-ratio:5/4;overflow:hidden;background:repeating-linear-gradient(45deg,#1c160f,#1c160f 12px,#15100a 12px,#15100a 24px);border:1px solid rgba(236,227,208,.08)')}>
            <div style={s('position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:#5f5640')}>branded hamper shot</div>
          </div>
        </div>
      </section>

      {/* story */}
      <section id="story" style={s('max-width:1180px;margin:0 auto;padding:112px 48px;display:grid;grid-template-columns:.95fr 1.05fr;gap:60px;align-items:center')}>
        <div style={s('position:relative;aspect-ratio:4/5;overflow:hidden;background:repeating-linear-gradient(45deg,#241d14,#241d14 11px,#1b150e 11px,#1b150e 22px);border:1px solid rgba(236,227,208,.08)')}>
          <div style={s('position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:#6f6650')}>atelier / pouring shot</div>
        </div>
        <div>
          <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;margin-bottom:22px')}>05 — Our Craft</div>
          <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(30px,3.8vw,50px);line-height:1.06;margin:0 0 24px;letter-spacing:-.01em;color:#f3ecdb")}>Poured slowly, in small batches.</h2>
          <p style={s('max-width:480px;font-weight:300;font-size:16.5px;line-height:1.8;color:#a99e88;margin:0 0 24px')}>
            Every candle begins as natural soy and coconut wax, scented with perfumer-grade oils and finished by hand in our studio. The vessels are made to be kept — refill them, or let them hold a marigold long after Diwali.
          </p>
          <Link to="/story" style={s('font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:#ece3d0;text-decoration:none;border-bottom:1px solid #c9a24b;padding-bottom:5px')}>Read our story →</Link>
        </div>
      </section>

      {/* festive CTA strip */}
      <section style={s('max-width:1180px;margin:0 auto;padding:40px 48px 110px;text-align:center')}>
        <div style={s('border:1px solid rgba(201,162,75,.3);background:rgba(28,22,15,.5);padding:64px 48px;backdrop-filter:blur(4px)')}>
          <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;margin-bottom:18px')}>Let's plan your gifting</div>
          <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(28px,3.6vw,46px);line-height:1.05;margin:0 0 16px;letter-spacing:-.01em;color:#f3ecdb")}>Every wish deserves a flame</h2>
          <p style={s('max-width:460px;margin:0 auto 30px;font-weight:300;font-size:16px;line-height:1.7;color:#a99e88')}>
            Browse the festive collection, or tell us about your occasion and a gifting concierge will craft something for you.
          </p>
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
