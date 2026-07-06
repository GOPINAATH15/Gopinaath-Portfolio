import { motion } from "framer-motion";
import { skills, languages } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-base-soft/40">
      <div className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow"
        >
          02 / Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3"
        >
          Tools I reach for.
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm font-medium text-ink">{skill.name}</span>
                <span className="font-mono text-xs text-ink-faint">{skill.group}</span>
              </div>
              <div className="h-2 rounded-full bg-line overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, delay: i * 0.05 + 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent-light"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 flex items-center gap-4 font-mono text-xs text-ink-faint"
        >
          <span className="uppercase tracking-widest text-ink-muted">Languages:</span>
          {languages.map((lang, i) => (
            <span key={lang}>
              {lang}
              {i < languages.length - 1 && <span className="text-line mx-2">/</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
