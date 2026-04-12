// Footer.jsx — Bottom bar. Reads: profile.name

import profile from "../data/profile";

export default function Footer() {
  return (
    <footer id="footer" className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p className="text-slate-600 text-sm">
          Designed & built by{" "}
          <span className="text-slate-400">{profile.name}</span>
        </p>
        <p className="text-slate-600 text-sm font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
