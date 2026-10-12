// Builds the data-driven sections from data.js
(function () {
  const D = window.HDS_DATA, $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rv = (i) => "rv" + (i % 4 ? " d" + (i % 4) : "");

  $("#stats").innerHTML = D.stats.map(s => `<div><b class="count" data-to="${s.value}" data-dec="${s.decimals || 0}" data-suf="${s.suffix}">0</b><small>${esc(s.label)}</small></div>`).join("");

  $("#cgrid").innerHTML = D.programs.map((p, i) => `<article class="card ${rv(i)}"><span class="g" aria-hidden="true">${esc(p.title[0])}</span><span class="for">${esc(p.age)} &middot; ${esc(p.dur)}</span><div><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><a href="#contact" data-class="${esc(p.title)}">Ask about this class</a></div></article>`).join("");

  $("#whyList").innerHTML = D.why.map((w, i) => `<li class="${rv(i)}"><h3>${esc(w[0])}</h3><p>${esc(w[1])}</p></li>`).join("");

  $("#ttgrid").innerHTML = D.timetable.map((t, i) => `<div class="tt ${rv(i)}"><h3>${esc(t.title)}</h3><small>${esc(t.time)}</small>${t.rows.map(r => `<div class="ttr"><span>${esc(r[0])}</span><b>${esc(r[1])}</b></div>`).join("")}</div>`).join("");

  $("#pgrid").innerHTML = D.plans.map((p, i) => `<div class="plan ${p.popular ? "pop" : ""} ${rv(i)}">${p.popular ? '<span class="badge">Most popular</span>' : ""}<h3>${esc(p.name)}</h3><div class="amt">&#8377;${esc(p.price)}<small> / month</small></div><ul>${p.feats.map(f => `<li>${esc(f)}</li>`).join("")}</ul><a class="btn ${p.popular ? "rose" : ""}" href="#contact" data-class="Free trial">Book free trial</a></div>`).join("");

  const today = new Date().toISOString().slice(0, 10);
  const evs = D.events.filter(e => !e.end || e.end >= today);
  $("#elist").innerHTML = evs.length ? evs.map((e, i) => `<a class="row ${rv(i)}" href="#contact"><span class="k">${esc(e.date)}</span><div><h3>${esc(e.title)}</h3><p>${esc(e.desc)}</p></div><span class="ar">&rarr;</span></a>`).join("") : '<p class="rv">New events are announced soon. Ask us on WhatsApp.</p>';

  const ini = n => n.split(" ").map(w => w[0]).join("").slice(0, 2);
  $("#tgrid").innerHTML = D.team.map((m, i) => `<div class="member ${rv(i)}"><div class="av">${m.photo ? `<img src="${m.photo}" alt="${esc(m.name)}" loading="lazy">` : `<span>${esc(ini(m.name))}</span>`}</div><h3>${esc(m.name)}</h3><em>${esc(m.role)}</em><p>${esc(m.bio)}</p></div>`).join("");

  const st = D.stats;
  $("#score").textContent = st[0].value.toFixed(1);
  $("#scoreSub").textContent = st[1].value + " Google reviews. Scroll for what our dancers say.";
  $("#rtrack").innerHTML = D.reviews.map(r => `<figure class="rcard"><div class="stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><blockquote>${esc(r.text)}</blockquote><figcaption><b>${esc(r.name)}</b><small>${esc(r.tag)}</small></figcaption></figure>`).join("");

  $("#faqs").innerHTML = D.faqs.map(f => `<details><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join("");

  // Contact form class options
  const sel = $("#interest");
  D.programs.map(p => p.title).concat(["Free trial", "Events and workshops"]).forEach(t => sel.add(new Option(t, t)));

  // Animated counters
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.to, dec = +el.dataset.dec, suf = el.dataset.suf, t0 = performance.now();
    (function f(t) { const k = Math.min(1, (t - t0) / 1400), v = to * (1 - Math.pow(1 - k, 3)); el.textContent = v.toFixed(dec) + (k === 1 ? suf : ""); if (k < 1) requestAnimationFrame(f); })(t0);
  }), { threshold: .6 });
  document.querySelectorAll(".count").forEach(el => cio.observe(el));
})();
