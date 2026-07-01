import { s } from '../lib/style';

// Fixed, scroll-parallaxed gold glow layer shared by every page.
// Layout's scroll handler drives #bg-warm opacity and [data-blob] transforms.
export default function Background() {
  return (
    <div style={s('position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden')}>
      <div style={s('position:absolute;inset:0;background:linear-gradient(180deg,#120e0a 0%,#171109 55%,#120d08 100%)')} />
      <div id="bg-warm" style={s('position:absolute;inset:0;opacity:0;background:radial-gradient(120% 90% at 60% 30%,#3a2710 0%,#241608 45%,transparent 100%);transition:opacity .15s linear')} />
      <div data-blob="" data-speed="0.05" style={s('position:absolute;left:-14%;top:-6%;width:720px;height:720px;mix-blend-mode:screen;will-change:transform')}>
        <div style={s('width:100%;height:100%;border-radius:50%;filter:blur(40px);background:radial-gradient(circle,rgba(201,162,75,.5) 0%,rgba(176,120,40,.22) 44%,transparent 72%);animation:driftA 22s ease-in-out infinite, embPulse 8s ease-in-out infinite')} />
      </div>
      <div data-blob="" data-speed="0.13" style={s('position:absolute;right:-16%;top:34%;width:640px;height:640px;mix-blend-mode:screen;will-change:transform')}>
        <div style={s('width:100%;height:100%;border-radius:50%;filter:blur(44px);background:radial-gradient(circle,rgba(224,170,90,.45) 0%,rgba(150,95,30,.2) 46%,transparent 72%);animation:driftB 26s ease-in-out infinite, embPulse 10s ease-in-out infinite')} />
      </div>
      <div data-blob="" data-speed="0.1" style={s('position:absolute;left:24%;bottom:-12%;width:780px;height:780px;mix-blend-mode:screen;will-change:transform')}>
        <div style={s('width:100%;height:100%;border-radius:50%;filter:blur(52px);background:radial-gradient(circle,rgba(208,150,70,.4) 0%,rgba(130,80,28,.18) 48%,transparent 72%);animation:driftA 30s ease-in-out infinite, embPulse 12s ease-in-out infinite')} />
      </div>
    </div>
  );
}
