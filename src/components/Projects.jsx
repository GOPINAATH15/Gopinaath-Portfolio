import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-base-soft/40">
      <div className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow"
        >
          04 / Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3"
        >
          Things I&apos;ve shipped.
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-xl p-6 flex flex-col shadow-glass hover:shadow-glow hover:border-accent/40 border border-transparent transition-shadow"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-signal">
                {project.subtitle}
              </p>
              <h3 className="font-display text-lg font-semibold mt-2 text-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed flex-1">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-xs text-ink-muted">
                    <span className="text-accent-light shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wide rounded border border-line px-2 py-1 text-ink-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-line/70 pt-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-accent-light transition-colors"
                >
                  <Github size={14} /> Code
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-accent-light transition-colors"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
