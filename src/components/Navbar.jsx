import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import profile from "../data/profile";

const RESUME_PATH = `/${profile.resumeFile}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeAvailable, setResumeAvailable] = useState(false);

  useEffect(() => {
    fetch(RESUME_PATH, { method: "HEAD" })
      .then((res) => {
        const ct = res.headers.get("content-type") || "";
        setResumeAvailable(res.ok && !ct.includes("text/html"));
      })
      .catch(() => setResumeAvailable(false));
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020c1b]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-mono font-bold text-lg tracking-widest text-sky-400">
          {profile.logoText}<span className="text-white">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}

          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors duration-200"
            >
              GitHub
            </a>
          )}
          {resumeAvailable && (
            <a
              href={RESUME_PATH}
              download
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors duration-200"
            >
              Resume
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 px-6 py-5 flex flex-col gap-4 bg-[#020c1b]">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors duration-200"
            >
              GitHub
            </a>
          )}
          {resumeAvailable && (
            <a
              href={RESUME_PATH}
              download
              className="text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors duration-200"
            >
              Resume
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
