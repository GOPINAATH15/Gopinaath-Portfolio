import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/resume";
import resumePdf from "../data/Gopi_Resume.pdf";

function useTypewriter(strings, typeSpeed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), typeSpeed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, strings, typeSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.typingStrings);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern bg-[size:44px_44px]"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-accent-light/15 blur-[140px]"
        aria-hidden
      />

      <div className="section-shell relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-5">// entry-level software developer</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink">
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span className="text-accent-light">I build things</span> with code.
          </h1>

          <p className="mt-6 font-mono text-base sm:text-lg text-ink-muted h-8">
            <span className="text-signal">$</span> {typed}
            <span className="inline-block w-[2px] h-5 bg-accent-light ml-1 align-middle animate-blink" />
          </p>

          <p className="mt-6 max-w-xl text-ink-muted leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-black shadow-glow hover:bg-accent-light transition-colors"
            >
              View Projects
            </a>
            <a
              href={resumePdf}
              download
              className="rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-accent/60 hover:text-accent-light transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-ink-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent-light transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent-light transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent-light transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="animate-floaty"
        >
          <div className="rounded-xl glass-panel shadow-glass overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line/70">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-ink-faint">Profile.java</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
              <code>
                <span className="text-accent-light">public class</span>{" "}
                <span className="text-signal">Developer</span> {"{"}
                {"\n"}
                {"  "}
                <span className="text-ink-faint">private</span> String name ={" "}
                <span className="text-signal">"Gopinaath A"</span>;{"\n"}
                {"  "}
                <span className="text-ink-faint">private</span> String role ={" "}
                <span className="text-signal">"Software Developer"</span>;{"\n"}
                {"  "}
                <span className="text-ink-faint">private</span> String[] stack = {"{"}
                {"\n"}
                {"    "}
                <span className="text-signal">"Java"</span>,{" "}
                <span className="text-signal">"React.js"</span>,{"\n"}
                {"    "}
                <span className="text-signal">"MySQL"</span>,{" "}
                <span className="text-signal">"JDBC"</span>
                {"\n"}
                {"  "}
                {"};"}
                {"\n\n"}
                {"  "}
                <span className="text-accent-light">public</span> String status() {"{"}
                {"\n"}
                {"    "}
                <span className="text-accent-light">return</span>{" "}
                <span className="text-signal">"Open to opportunities"</span>;{"\n"}
                {"  "}
                {"}"}
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-accent-light transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
