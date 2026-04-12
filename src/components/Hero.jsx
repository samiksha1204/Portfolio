// Hero.jsx — Full-screen landing section.
// Reads: profile.name, profile.role, profile.photo, profile.tagline, profile.bio.short

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  const taglineLines = profile.tagline.split("\n");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full mx-auto pt-20 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          <div className="flex-1">
            <motion.p
              {...fadeUp(0.1)}
              className="text-violet-400 text-sm font-mono mb-4 tracking-widest uppercase"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {profile.name}
              <span className="text-violet-400">.</span>
            </motion.h1>
            <motion.h2
              {...fadeUp(0.3)}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-500 mb-8 leading-tight"
            >
              {taglineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < taglineLines.length - 1 && (
                    <>
                      {" "}
                      <br className="hidden md:block" />
                    </>
                  )}
                </span>
              ))}
            </motion.h2>
            {/* Photo shown on mobile only, between tagline and bio */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex justify-center mb-8 md:hidden"
            >
              <div className="relative w-64 h-64">
                <img
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.role}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
                />
                <div className="absolute rounded-lg border-2 border-violet-400/40 inset-0 translate-x-0 translate-y-0" />
              </div>
            </motion.div>
            <motion.p
              {...fadeUp(0.4)}
              className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed text-justify hyphens-auto"
            >
              {profile.bio.short}
            </motion.p>
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="px-6 py-3 bg-violet-400 text-slate-950 font-semibold rounded hover:bg-violet-300 transition-colors duration-200"
              >
                See My Work
              </a>
              <a
                href="#blog"
                className="px-6 py-3 border border-slate-700 text-slate-300 rounded hover:border-slate-400 hover:text-white transition-colors duration-200"
              >
                Read My Blog
              </a>
            </motion.div>
          </div>
          {/* Photo shown on desktop only, in side column */}
          <motion.div
            {...fadeUp(0.6)}
            className="hidden md:flex justify-end shrink-0 pb-5 md:pr-5"
          >
            <div className="relative w-72 h-72">
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
              />
              <div className="absolute rounded-lg border-2 border-violet-400/40 inset-0 translate-x-0 translate-y-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
