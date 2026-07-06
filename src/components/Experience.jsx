import { motion } from "framer-motion";
import { GitCommit } from "lucide-react";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow"
        >
          03 / Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3"
        >
          A short log, so far.
        </motion.h2>
        <p className="mt-3 text-ink-muted max-w-lg text-sm">
          Two roles, written the way a commit history reads: newest first.
        </p>

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-line" aria-hidden />

          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <span className="absolute -left-8 sm:-left-10 top-1 w-5 h-5 rounded-full bg-base border-2 border-accent flex items-center justify-center">
                <GitCommit size={11} className="text-accent-light" />
              </span>

              <div className="glass-panel rounded-lg p-6">
                <p className="font-mono text-xs text-signal">{job.commit}</p>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mt-2">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {job.role} <span className="text-ink-faint">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                </div>

                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-muted">
                      <span className="text-accent-light mt-1.5 shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-wide rounded border border-line px-2 py-1 text-ink-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
