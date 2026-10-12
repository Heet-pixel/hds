(function () {
  const C = window.HDS_CONFIG || {}, $ = s => document.querySelector(s);
  $("#yr").textContent = new Date().getFullYear();

  // Marquee (duplicated for seamless loop)
  const items = ((window.HDS_DATA || {}).programs || []).map(p => `<span>${p.title}</span>`).join("");
  $("#track").innerHTML = items + items + items + items;

  // Contact details from config
  const s = C.studio || {};
  const fill = (id, text, href) => { if (!text) return; const el = $(id); el.hidden = false; el.querySelector("b").textContent = text; if (href) el.href = href; };
  fill("#iMail", s.email, "mailto:" + s.email);
  fill("#iPhone", s.phone, "tel:" + (s.phone || "").replace(/\s/g, ""));
  fill("#iInsta", s.instagram && "@" + s.instagram, "https://instagram.com/" + s.instagram);
  fill("#iAddr", s.address);
  fill("#iHours", s.hours);
  if (s.address) { const m = $("#map"); m.src = "https://www.google.com/maps?q=" + encodeURIComponent(s.address) + "&output=embed"; m.hidden = false; }
  if (s.whatsapp) { const w = $("#wa"); w.href = "https://wa.me/" + s.whatsapp; w.classList.add("show"); }

  // Videos: all play automatically, muted, and loop continuously (no controls)
  const grid = $("#vgrid");
  const vids = [];
  (C.videos || []).forEach(v => {
    const card = document.createElement("div"); card.className = "vcard rv";
    card.innerHTML = `<video autoplay muted loop playsinline preload="auto" disablepictureinpicture ${v.poster ? `poster="${v.poster}"` : ""}><source src="${v.src}" type="video/mp4"></video><div class="vcap">${v.title}</div>`;
    const vid = card.querySelector("video");
    vid.muted = true; vid.defaultMuted = true;
    vid.querySelector("source").addEventListener("error", () => { vid.remove(); card.insertAdjacentHTML("afterbegin", `<div class="ph"><div><b>${v.title}</b>Add <code>${v.src}</code> to show your video here</div></div>`); });
    vids.push(vid);
    grid.appendChild(card);
  });
  const playAll = () => vids.forEach(v => v.parentNode && v.paused && v.play().catch(() => {}));
  playAll();
  vids.forEach(v => { v.addEventListener("pause", () => setTimeout(playAll, 50)); v.addEventListener("canplay", playAll); });
  document.addEventListener("visibilitychange", () => !document.hidden && playAll());
  ["touchstart", "click", "scroll"].forEach(ev => addEventListener(ev, playAll, { once: true, passive: true }));

  // Section slide-ins: About from right, next from left, and so on
  const slides = [...document.querySelectorAll("main > section")].filter(sc => sc.id !== "home");
  slides.forEach((sc, i) => { sc.classList.add("sl"); if (i % 2) sc.classList.add("from-left"); });
  const sio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); sio.unobserve(e.target); } }), { threshold: .06, rootMargin: "0px 0px -8% 0px" });
  slides.forEach(sc => sio.observe(sc));

  // Scroll reveals
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));

  // Nav: solid on scroll, progress bar, active link, hero parallax
  const nav = $("#nav"), bar = $("#progress"), img = $("#heroImg");
  const links = [...document.querySelectorAll(".links a[href^='#']")], secs = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
  const calm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  let tick = false;
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("solid", y > 30);
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    if (!calm && y < innerHeight) img.style.transform = `translateY(${-y * .06}px)`;
    let cur = secs[0]; secs.forEach(sc => { if (y + 140 >= sc.offsetTop) cur = sc; });
    links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + (cur && cur.id)));
    tick = false;
  }
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Mobile menu
  const burger = $("#burger"), menu = $("#links");
  const setMenu = o => { menu.classList.toggle("open", o); burger.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", e => e.key === "Escape" && setMenu(false));
})();

/* rhythm feed bars + scroll-driven background dancer */
(() => {
  document.querySelectorAll(".eq").forEach(el => {
    const n = +el.dataset.n || 30;
    for (let k = 0; k < n; k++) {
      const env = Math.sin((k / (n - 1)) * Math.PI) * .75 + .25, i = document.createElement("i");
      i.style.setProperty("--hi", (env * (.55 + Math.random() * .45)).toFixed(2));
      i.style.setProperty("--lo", (.08 + Math.random() * .12).toFixed(2));
      i.style.setProperty("--t", (.45 + Math.random() * .9).toFixed(2) + "s");
      i.style.setProperty("--d", (-Math.random() * 1.5).toFixed(2) + "s");
      el.appendChild(i);
    }
  });
  const dn = document.querySelector(".dancer");
  if (!dn || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  let cur = 0, last = 0;
  const tick = () => {
    const max = document.documentElement.scrollHeight - innerHeight, p = max > 0 ? scrollY / max : 0;
    cur += (p - cur) * .07;
    const vel = (p - cur) * 40, w = innerWidth;
    const x = Math.sin(cur * Math.PI * 4) * w * .24, y = Math.sin(cur * Math.PI * 3) * 14 - cur * 8;
    const r = Math.sin(cur * Math.PI * 3) * 9 + vel, sc = 1 + cur * .14 + Math.sin(cur * Math.PI * 6) * .05;
    dn.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}vh,0) rotate(${r.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
    requestAnimationFrame(tick);
  };
  tick();
})();
