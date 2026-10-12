// Contact form: validation, submit, feedback
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("status"), btn = document.getElementById("send");
  const rules = {
    name: v => v.trim().length >= 2,
    phone: v => /^[+()\-\s\d]{7,20}$/.test(v.trim()),
    email: v => !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    message: v => v.trim().length >= 5
  };
  const check = el => { const ok = rules[el.name](el.value); el.closest(".fld").classList.toggle("bad", !ok); return ok; };
  Object.keys(rules).forEach(n => {
    const el = form.elements[n];
    el.addEventListener("blur", () => check(el));
    el.addEventListener("input", () => el.closest(".fld").classList.contains("bad") && check(el));
  });
  form.addEventListener("submit", async e => {
    e.preventDefault(); status.className = "status";
    const valid = Object.keys(rules).map(n => check(form.elements[n])).every(Boolean);
    if (!valid) { form.querySelector(".bad input,.bad textarea")?.focus(); return; }
    const data = Object.fromEntries(new FormData(form).entries());
    btn.disabled = true; btn.textContent = "Sending...";
    try {
      const r = await HDS_API.post("/api/contact", data);
      status.textContent = r.message || "Thank you! We will contact you soon.";
      status.className = "status ok"; form.reset();
    } catch (err) { status.textContent = err.message; status.className = "status no"; }
    finally { btn.disabled = false; btn.textContent = "Send message"; }
  });
  // Pre-select class when a card/link is clicked
  document.querySelectorAll("[data-class]").forEach(a => a.addEventListener("click", () => {
    const sel = form.elements.interest, v = a.dataset.class;
    if ([...sel.options].some(o => (o.value || o.text) === v)) sel.value = v;
  }));
})();
