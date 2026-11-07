/**
 * Calm motion, about 1 KB.
 * - .reveal elements fade and drift in once, as they enter the view
 * - --scroll (0 to 1) on <html> turns the background wheel
 * - [data-scrub] elements get --p (0 to 1) as you scroll through them (for word-by-word text, drawn lines)
 *     data-scrub="sticky": progress across a tall section with a sticky inner part
 *     data-scrub="enter":  progress as the element moves up through the screen
 */
const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('in');
          io.unobserve(e.target);
        }
      }),
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );
  reveals.forEach((el) => io.observe(el));
}

const scrubs = Array.from(document.querySelectorAll<HTMLElement>('[data-scrub]'));
const clamp = (v: number) => Math.min(1, Math.max(0, v));

function update() {
  ticking = false;
  const vh = window.innerHeight;
  const max = root.scrollHeight - vh;
  root.style.setProperty('--scroll', (max > 0 ? window.scrollY / max : 0).toFixed(4));
  for (const el of scrubs) {
    let p = 1;
    if (!reduce) {
      const r = el.getBoundingClientRect();
      if (el.dataset.scrub === 'sticky') {
        const total = r.height - vh;
        p = total > 0 ? clamp(-r.top / total) : 1;
      } else {
        p = clamp((vh * 0.9 - r.top) / (vh * 0.6 + r.height * 0.4));
      }
    }
    el.style.setProperty('--p', p.toFixed(4));
  }
}

let ticking = false;
const onScroll = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
update();
