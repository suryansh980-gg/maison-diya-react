import { useEffect, useRef } from 'react';
import { s } from '../lib/style';
import Background from './Background';
import Nav from './Nav';
import Footer from './Footer';

// Shared shell for every page: fixed gold-glow background, announcement bar,
// sticky nav, page content, footer. Drives the scroll-parallax on #bg-warm
// and [data-blob] the same way the original inline script did.
export default function Layout({ active, footerCols, footerMarginTop, children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const gp = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;

      const warm = root.querySelector('#bg-warm');
      if (warm) warm.style.opacity = (gp * 0.9).toFixed(3);
      root.querySelectorAll('[data-blob]').forEach((b) => {
        const sp = parseFloat(b.getAttribute('data-speed')) || 0.1;
        b.style.transform = 'translate3d(0,' + (-y * sp).toFixed(1) + 'px,0)';
      });
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
    <div ref={rootRef} style={s('position:relative;overflow-x:hidden')}>
      <Background />
      <div style={s('position:relative;z-index:2')}>
        <div style={s('text-align:center;font-size:11px;letter-spacing:.26em;text-transform:uppercase;padding:9px 16px;color:#9a8c6c;border-bottom:1px solid rgba(236,227,208,.08)')}>
          Complimentary gift wrapping · Pan-India delivery before Diwali
        </div>
        <Nav active={active} />
        {children}
        <Footer footerCols={footerCols} marginTop={footerMarginTop} />
      </div>
    </div>
  );
}
