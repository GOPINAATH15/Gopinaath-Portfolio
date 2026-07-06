import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base-deep py-8">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-5 text-ink-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent-light transition-colors">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent-light transition-colors">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent-light transition-colors">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
