import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import { profile } from "../data/resume";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      label: "linkedin.com/in/gopiii-a-15g/",
      url: profile.linkedin,
      bg: "bg-[#0077B5]", // LinkedIn Blue
    },
    {
      icon: <Github size={18} />,
      label: "github.com/GOPINAATH15",
      url: profile.github,
      bg: "bg-[#24292E]", // GitHub Dark Gray
    },
    {
      icon: <Mail size={18} />,
      label: profile.email,
      url: `mailto:${profile.email}`,
      bg: "bg-[#EA4335]", // Gmail Red
    },
    {
      icon: <Phone size={18} />,
      label: profile.phone,
      url: `tel:${profile.phone.replace(/\s/g, "")}`,
      bg: "bg-[#34A853]", // Green
    },
    {
      icon: <MapPin size={18} />,
      label: "Neyveli, India",
      url: "https://maps.app.goo.gl/yvtyhBfwuGu3rjN58",
      bg: "bg-[#E056FD]", // Purple/Pink
    },
  ];

  return (
    <footer id="contact" className="border-t border-line bg-black py-24 relative overflow-hidden">
      <div className="section-shell">
        {/* Contact Heading inside Footer */}
        <div className="mb-14">
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
            Open to entry-level software developer roles. Connect directly through any of the channels below.
          </p>
        </div>

        {/* Content Columns: Direct Cards vs Social Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards (like previous design) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4 w-full"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent-light mb-2">// Direct Channels</h3>
            
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 glass-panel rounded-lg p-4 hover:border-accent-light/40 border border-transparent transition-colors"
            >
              <Mail size={18} className="text-accent-light shrink-0" />
              <span className="text-sm text-ink-muted break-all">{profile.email}</span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 glass-panel rounded-lg p-4 hover:border-accent-light/40 border border-transparent transition-colors"
            >
              <Phone size={18} className="text-accent-light shrink-0" />
              <span className="text-sm text-ink-muted">{profile.phone}</span>
            </a>

            <div className="flex items-center gap-4 glass-panel rounded-lg p-4 border border-transparent">
              <MapPin size={18} className="text-accent-light shrink-0" />
              <span className="text-sm text-ink-muted">{profile.location}</span>
            </div>
          </motion.div>

          {/* Right Column: Social Grid (from photo layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.08 }}
            className="w-full"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent-light mb-6">// Social Profiles</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 group w-full"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-ink-muted group-hover:text-accent-light transition-colors break-all leading-normal">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Copyrights */}
        <div className="mt-20 pt-8 border-t border-line/45 text-center">
          <p className="font-mono text-[11px] text-ink-faint tracking-wider">
            © {new Date().getFullYear()} Gopinaath A. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
