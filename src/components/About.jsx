import { motion } from "framer-motion";
import { Code2, Database, Layers, GraduationCap } from "lucide-react";
import { profile } from "../data/resume";

const facts = [
  {
    icon: Code2,
    label: "Languages",
    value: "Java, JavaScript",
  },
  {
    icon: Layers,
    label: "Frontend",
    value: "React.js, HTML, CSS",
  },
  {
    icon: Database,
    label: "Data",
    value: "MySQL, JDBC, SQL",
  },
  {
    icon: GraduationCap,
    label: "Degree",
    value: "B.Sc Computer Science",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-shell">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="eyebrow"
        >
          01 / About
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl font-semibold mt-3 max-w-2xl"
        >
          Grounded in fundamentals, building toward full-stack.
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-ink-muted leading-relaxed text-[15px]"
          >
            {profile.summary} My work so far has moved from Core Java and JDBC
            on the backend to React.js on the front end, which means I&apos;m
            equally comfortable reasoning about a database schema and about
            the state of a UI. I like systems that are easy to reason about:
            clear CRUD flows, validated inputs, and code that reads the way it
            behaves.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-panel rounded-lg p-4 hover:border-accent/40 border border-transparent transition-colors"
              >
                <Icon size={18} className="text-accent-light mb-3" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  {label}
                </p>
                <p className="text-sm text-ink mt-1">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
