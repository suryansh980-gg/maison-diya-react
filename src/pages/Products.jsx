import { useState } from 'react';
import { Link } from 'react-router-dom';
import { s } from '../lib/style';
import { Hoverable } from '../components/Interactive';
import Layout from '../components/Layout';
import { footerCols } from '../data/footerCols';

const goldBtnHover = { background: '#dcb764' };
const chipHover = { borderColor: 'rgba(201,162,75,.6)', color: '#ece3d0' };
const cardHover = { transform: 'translateY(-4px)' };
const quickHover = { opacity: 1 };

const PRODUCTS = [
  { name: 'Saffron & Oud', note: 'Resin · amber · saffron', price: '₹1,450', tag: 'Bestseller', cat: 'Festive' },
  { name: 'Marigold Bloom', note: 'Marigold · neroli · stem', price: '₹1,200', tag: 'Festive', cat: 'Festive' },
  { name: 'Sandalwood Temple', note: 'Sandal · cedar · smoke', price: '₹1,650', tag: 'New', cat: 'Festive' },
  { name: 'Rose & Cardamom', note: 'Rose · cardamom · honey', price: '₹1,350', tag: 'Wedding', cat: 'Weddings' },
  { name: 'Amber Diya', note: 'Amber · vanilla · tobacco', price: '₹1,500', tag: 'Limited', cat: 'Festive' },
  { name: 'Vetiver Earth', note: 'Vetiver · clove · earth', price: '₹1,250', tag: 'Home', cat: 'Housewarming' },
  { name: 'Jasmine Mogra', note: 'Mogra · tuberose · musk', price: '₹1,300', tag: 'Wedding', cat: 'Weddings' },
  { name: 'Champaca Gold', note: 'Champaca · honey · woods', price: '₹1,550', tag: '', cat: 'Festive' },
  { name: 'Tulsi & Lime', note: 'Holy basil · lime · vetiver', price: '₹1,150', tag: 'Home', cat: 'Housewarming' },
];

const CATS = ['All', 'Festive', 'Weddings', 'Housewarming', 'Corporate'];

const chipBaseCss = 'font-family:Jost;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;padding:11px 22px;border-radius:2px;cursor:pointer;transition:.2s;';

export default function Products() {
  const [active, setActive] = useState('All');

  const visibleProducts = active === 'All' || active === 'Corporate'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.cat === active);

  return (
    <Layout active="products" footerCols={footerCols} footerMarginTop="96px">
      <header style={s('max-width:1180px;margin:0 auto;padding:96px 48px 20px;text-align:center')}>
        <div style={s('font-size:12px;letter-spacing:.34em;text-transform:uppercase;color:#c9a24b;margin-bottom:22px')}>The Collection</div>
        <h1 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(44px,6vw,86px);line-height:.98;letter-spacing:-.015em;margin:0 0 22px;color:#f3ecdb")}>
          Scents worth <em style={s('font-style:italic;color:#e8cf9a')}>gifting</em>
        </h1>
        <p style={s('max-width:520px;margin:0 auto;font-weight:300;font-size:17px;line-height:1.7;color:#a99e88')}>
          Hand-poured in small batches with natural wax and perfumer-grade oils. Each candle ships in a keepsake vessel, wrapped and ready to give.
        </p>
      </header>

      <section style={s('max-width:1180px;margin:0 auto;padding:40px 48px 10px')}>
        <div style={s('display:flex;gap:12px;justify-content:center;flex-wrap:wrap')}>
          {CATS.map((c) => {
            const isActive = c === active;
            const chipStyle = chipBaseCss + (isActive
              ? 'background:#c9a24b;color:#100d09;border:1px solid #c9a24b;'
              : 'background:transparent;color:#a99e88;border:1px solid rgba(236,227,208,.22);');
            return (
              <Hoverable
                key={c}
                as="button"
                onClick={() => setActive(c)}
                base={s(chipStyle)}
                hoverStyle={chipHover}
              >
                {c}
              </Hoverable>
            );
          })}
        </div>
      </section>

      <section style={s('max-width:1180px;margin:0 auto;padding:48px 48px 30px')}>
        <div style={s('display:grid;grid-template-columns:repeat(3,1fr);gap:40px 26px')}>
          {visibleProducts.map((p, i) => (
            <Hoverable key={i} as="div" base={s('position:relative')} hoverStyle={cardHover}>
              <div style={s('position:relative;aspect-ratio:4/5;overflow:hidden;background:repeating-linear-gradient(45deg,#241d14,#241d14 11px,#1b150e 11px,#1b150e 22px);border:1px solid rgba(236,227,208,.08);margin-bottom:18px')}>
                <div style={s('position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:#6f6650')}>product shot</div>
                <div style={s('position:absolute;top:13px;right:13px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:#c9a24b;padding:5px 9px;border:1px solid rgba(201,162,75,.4)')}>{p.tag}</div>
                <Hoverable
                  as="div"
                  base={s('position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;padding-bottom:18px;opacity:0;background:linear-gradient(180deg,transparent 50%,rgba(12,9,5,.82) 100%)')}
                  hoverStyle={quickHover}
                >
                  <span style={s('font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:#100d09;background:#c9a24b;padding:11px 22px')}>Add to bag</span>
                </Hoverable>
              </div>
              <div style={s('display:flex;justify-content:space-between;align-items:baseline;gap:10px')}>
                <h3 style={s("font-family:'Bodoni Moda',serif;font-weight:500;font-size:22px;margin:0;letter-spacing:-.01em;color:#f1e9d6")}>{p.name}</h3>
                <div style={s('font-size:16px;color:#e8cf9a;white-space:nowrap')}>{p.price}</div>
              </div>
              <div style={s('font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8a7d60;margin-top:8px')}>{p.note}</div>
            </Hoverable>
          ))}
        </div>
      </section>

      <section style={s('max-width:1180px;margin:60px auto 0;padding:0 48px')}>
        <div style={s('border:1px solid rgba(201,162,75,.3);background:rgba(28,22,15,.5);backdrop-filter:blur(4px);padding:56px 48px;display:flex;justify-content:space-between;align-items:center;gap:32px;flex-wrap:wrap')}>
          <div>
            <div style={s('font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#c9a24b;margin-bottom:14px')}>Buying in volume?</div>
            <h2 style={s("font-family:'Bodoni Moda',serif;font-weight:400;font-size:clamp(26px,3vw,40px);margin:0;letter-spacing:-.01em;color:#f3ecdb")}>Branded candles &amp; hampers, from 25 units.</h2>
          </div>
          <Hoverable as={Link} to="/contact" base={s('background:#c9a24b;color:#100d09;text-decoration:none;padding:16px 32px;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap')} hoverStyle={goldBtnHover}>
            Request a gifting deck
          </Hoverable>
        </div>
      </section>
    </Layout>
  );
}
