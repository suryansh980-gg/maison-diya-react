import { Link } from 'react-router-dom';
import { s } from '../lib/style';
import { Hoverable } from './Interactive';

const navHover = { color: '#ece3d0' };
const navCtaHover = { background: '#c9a24b', color: '#100d09', borderColor: '#c9a24b' };

// `active` mirrors the original hard-coded per-page nav state: only the
// Products and Story pages highlight their own link; Home and Contact don't.
export default function Nav({ active }) {
  const linkBase = (key) => s(`color:${active === key ? '#ece3d0' : '#a99e88'};text-decoration:none`);

  return (
    <nav style={s('position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:20px 48px;backdrop-filter:blur(12px);background:rgba(16,13,9,.55);border-bottom:1px solid rgba(236,227,208,.08)')}>
      <Link to="/" style={s("font-family:'Bodoni Moda',serif;font-size:22px;letter-spacing:.05em;color:#ece3d0;text-decoration:none;font-weight:500")}>MAISON DIYA</Link>
      <div style={s('display:flex;align-items:center;gap:30px;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase')}>
        <Hoverable as={Link} to="/" base={linkBase('home')} hoverStyle={navHover}>Home</Hoverable>
        <Hoverable as={Link} to="/products" base={linkBase('products')} hoverStyle={navHover}>Candles</Hoverable>
        <Hoverable as={Link} to="/story" base={linkBase('story')} hoverStyle={navHover}>Our Story</Hoverable>
        <Hoverable
          as={Link}
          to="/contact"
          base={s('color:#ece3d0;text-decoration:none;border:1px solid rgba(201,162,75,.5);padding:9px 18px;letter-spacing:.12em')}
          hoverStyle={navCtaHover}
        >
          Contact
        </Hoverable>
      </div>
    </nav>
  );
}
