import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="eyebrow"
        >
          05 / Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3"
        >
          Where the fundamentals came from.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel rounded-lg p-6"
            >
              <GraduationCap size={20} className="text-accent-light mb-4" />
              <p className="font-mono text-xs text-ink-faint">{ed.period}</p>
              <h3 className="font-display font-semibold text-ink mt-1">{ed.school}</h3>
              <p className="text-sm text-ink-muted mt-1">{ed.degree}</p>
              <p className="text-sm text-accent-light mt-3 font-mono">{ed.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
