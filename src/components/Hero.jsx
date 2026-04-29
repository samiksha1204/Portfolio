// Hero.jsx — Full-screen landing section.
// Reads: profile.name, profile.role, profile.photo, profile.tagline, profile.bio.short

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const stats = [
  { value: "2+", label: "years experience" },
  { value: profile.certifications.length, label: "SAP certifications" },
  { value: profile.projects.filter((p) => p.title).length, label: "projects built" },
];

export default function Hero() {
  const taglineLines = profile.tagline.split("\n");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="max-w-5xl w-full mx-auto pt-20 pb-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          <div className="flex-1">
            <motion.p
              {...fadeUp(0.1)}
              className="text-sky-400 text-sm font-mono mb-4 tracking-widest uppercase"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-sky-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
              <span className="text-sky-400">.</span>
            </motion.h1>
            <motion.h2
              {...fadeUp(0.3)}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-500 mb-8 leading-tight"
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

            {/* Photo — mobile only */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex justify-center mb-8 md:hidden"
            >
              <div className="relative w-64 h-64 group">
                <img
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.role}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg z-10 transition-all duration-500"
                />
                <div className="absolute rounded-lg border-2 border-sky-400/50 inset-0 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-lg z-20 ring-1 ring-sky-400/20 group-hover:ring-sky-400/50 transition-all duration-300" />
              </div>
            </motion.div>

            <motion.p
              {...fadeUp(0.4)}
              className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed text-justify hyphens-auto"
            >
              {profile.bio.short}
            </motion.p>

            {/* Stats strip */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-8 mb-10 border-l-2 border-sky-400/30 pl-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-white font-bold text-2xl">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="px-6 py-3 bg-sky-400 text-slate-950 font-semibold rounded-lg hover:bg-sky-300 transition-colors duration-200"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400 hover:text-slate-950 transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Photo — desktop only */}
          <motion.div
            {...fadeUp(0.6)}
            className="hidden md:flex justify-end shrink-0 pb-5 md:pr-5"
          >
            <div className="relative w-72 h-72 group">
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg z-10 transition-all duration-500"
              />
              <div className="absolute rounded-lg border-2 border-sky-400/50 inset-0 translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg z-20 ring-1 ring-sky-400/20 group-hover:ring-sky-400/50 transition-all duration-300" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-sky-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
