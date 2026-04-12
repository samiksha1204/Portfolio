// Skills.jsx — "Skills & Credentials" section with certifications, tech stack, and publications.
// Reads: profile.certifications, profile.stack, profile.publications

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Certifications */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-white mb-10">
            Skills & Credentials
          </h2>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">
            Certifications
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.certifications.map((cert) => {
              const inner = (
                <>
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">
                      {cert.name}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      {cert.issuer} · Issued {cert.issued}
                    </p>
                  </div>
                  {cert.url && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-label="Opens in new tab"
                      role="img"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </>
              );

              return cert.url ? (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-800 rounded-lg p-4 flex items-start gap-3 hover:border-slate-600 transition-colors duration-200"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={cert.name}
                  className="border border-slate-800 rounded-lg p-4 flex items-start gap-3"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div {...fadeUp}>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">
            Tech Stack
          </p>
          <div className="space-y-4">
            {profile.stack.map((group) => (
              <div
                key={group.category}
                className="flex flex-col sm:flex-row sm:items-start gap-3"
              >
                <span className="text-slate-500 text-sm w-24 shrink-0 pt-1 font-mono">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 border border-violet-400/30 text-violet-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div {...fadeUp}>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">
            Publications
          </p>
          <div className="space-y-4">
            {profile.publications.map((pub) => {
              const inner = (
                <>
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold leading-snug">
                      {pub.title}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">{pub.book}</p>
                    <p className="text-slate-500 text-xs mt-1">
                      {pub.publisher} · {pub.date} · {pub.authors}
                    </p>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed text-justify hyphens-auto">
                      {pub.summary}
                    </p>
                  </div>
                  {pub.url && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-label="Opens in new tab"
                      role="img"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </>
              );

              return pub.url ? (
                <a
                  key={pub.title}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-800 rounded-lg p-5 flex items-start gap-3 hover:border-slate-600 transition-colors duration-200"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={pub.title}
                  className="border border-slate-800 rounded-lg p-5 flex items-start gap-3"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
