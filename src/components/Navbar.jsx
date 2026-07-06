import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { profile } from "../data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16">
        <a href="#top" className="font-mono text-sm text-ink group">
          <span className="text-accent-light">~/</span>
          <span className="group-hover:text-accent-light transition-colors">gopinaath</span>
          <span className="animate-blink text-accent-light">_</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink-muted hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Gopinaath_A_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-accent/40 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-accent-light hover:bg-accent/10 transition-colors"
        >
          <Download size={14} /> Resume
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-base/95 backdrop-blur-md border-b border-line font-mono text-sm uppercase tracking-widest"
          >
            {links.map((l) => (
              <li key={l.href} className="border-t border-line/60">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-ink-muted hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="border-t border-line/60">
              <a
                href="/Gopinaath_A_Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 text-accent-light"
              >
                <Download size={14} /> Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
