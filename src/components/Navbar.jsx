// Navbar.jsx — Fixed top nav with mobile menu and resume button.
// Reads: profile.social.github. Resume button auto-shows when /public/resume.pdf exists.

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
  const links = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Blog",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl tracking-tight">
          {profile.logoText}
          <span className="text-violet-400">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-slate-600 text-slate-400 hover:border-white hover:text-white rounded transition-all duration-200"
            >
              GitHub
            </a>
          </li>
          {resumeAvailable && (
            <li>
              <a
                href={RESUME_PATH}
                download
                className="text-sm px-4 py-2 border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-950 rounded transition-all duration-200"
              >
                Resume
              </a>
            </li>
          )}
        </ul>
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 px-6 py-4 flex flex-col gap-4 bg-slate-950">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          {resumeAvailable && (
            <a
              href={RESUME_PATH}
              download
              className="text-violet-400 hover:text-violet-300 text-sm transition-colors duration-200"
            >
              Resume
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
