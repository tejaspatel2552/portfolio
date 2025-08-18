// server.js (Express example)
import express from "express";
import fetch from "node-fetch"; // if Node < 18; otherwise global fetch is fine

const app = express();
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, message, cfToken } = req.body;

    if (!cfToken) {
      return res.status(400).json({ error: "CAPTCHA token missing." });
    }

    // Verify with Cloudflare Turnstile
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY, // keep in env
        response: cfToken,
        // optionally: remoteip: req.ip
      }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(401).json({ error: "CAPTCHA verification failed." });
    }

    // ✅ CAPTCHA passed — handle your form (send email, save to DB, etc.)
    // await sendEmail({ name, email, company, message });
    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error." });
  }
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
