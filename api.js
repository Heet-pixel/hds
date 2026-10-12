// Small API helper
window.HDS_API = {
  async post(path, data) {
    const base = (window.HDS_CONFIG.API_BASE_URL || "").replace(/\/$/, "");
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch(base + path, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), signal: ctrl.signal
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.message || "Something went wrong. Please try again.");
      return json;
    } catch (e) {
      if (e.name === "AbortError") throw new Error("The server took too long to respond. Please try again.");
      if (e instanceof TypeError) throw new Error("Could not reach the server. Please try again, or contact us directly.");
      throw e;
    } finally { clearTimeout(t); }
  }
};
