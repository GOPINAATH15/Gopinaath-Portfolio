import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { profile } from "../data/resume";

// ---------------------------------------------------------------------------
// EmailJS setup (required before the form will actually send email):
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy its Service ID
// 3. Create an Email Template with variables: from_name, from_email, message
//    -> copy its Template ID
// 4. Account -> General -> copy your Public Key
// 5. Paste all three values into the constants below (or use a .env file,
//    see README.md for the Vite env-variable version).
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-base-soft/40">
      <div className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow"
        >
          06 / Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3"
        >
          Let&apos;s build something.
        </motion.h2>
        <p className="mt-3 text-ink-muted max-w-lg text-sm">
          Open to entry-level software developer roles. Reach out directly or
          send a message below.
        </p>

        <div className="mt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 glass-panel rounded-lg p-4 hover:border-accent/40 border border-transparent transition-colors"
            >
              <Mail size={18} className="text-accent-light shrink-0" />
              <span className="text-sm text-ink-muted">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 glass-panel rounded-lg p-4 hover:border-accent/40 border border-transparent transition-colors"
            >
              <Phone size={18} className="text-accent-light shrink-0" />
              <span className="text-sm text-ink-muted">{profile.phone}</span>
            </a>
            <div className="flex items-center gap-4 glass-panel rounded-lg p-4">
              <MapPin size={18} className="text-accent-light shrink-0" />
              <span className="text-sm text-ink-muted">{profile.location}</span>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="glass-panel rounded-xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="from_name" type="text" required />
              <Field label="Your email" name="from_email" type="email" required />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What would you like to build together?"
                className="mt-2 w-full rounded-md bg-base border border-line px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-signal">
                <CheckCircle2 size={16} /> Message sent — thanks for reaching out!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <XCircle size={16} /> Something went wrong. Please try again, or
                email {profile.email} directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-md bg-base border border-line px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
      />
    </div>
  );
}
