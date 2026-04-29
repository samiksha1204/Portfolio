// About.jsx — "Who I am" section with bio, interests, and education.
// Reads: profile.bio.long, profile.interests, profile.education

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
          Who I am
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              {profile.bio.long.map((para, i) => (
                <p key={i} className="text-justify hyphens-auto">{para}</p>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
                Currently Exploring
              </p>
              {profile.exploringNote && (
                <p className="text-slate-400 text-sm leading-relaxed mb-4 text-justify hyphens-auto">
                  {profile.exploringNote}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-slate-700 text-slate-400 rounded-full"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3">
              Education
            </p>
            {profile.education.map((edu) => (
              <div
                key={edu.degree}
                className="border border-slate-800 rounded-lg p-4 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold leading-snug">
                    {edu.degree}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {edu.location} · {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
