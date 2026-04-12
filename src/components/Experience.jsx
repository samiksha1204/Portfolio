// Experience.jsx — "Where I've Worked" timeline section.
// Reads: profile.experience

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
          Where I've Worked
        </motion.h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />
          <div className="space-y-8">
            {profile.experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:pl-8 relative"
              >
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-violet-400 -translate-x-0.5 hidden md:block" />
                <div className="border border-slate-800 rounded-lg p-6 hover:border-slate-600 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white text-base font-semibold">
                          {job.title}
                        </h3>
                        {job.note && (
                          <span className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded-full">
                            {job.note}
                          </span>
                        )}
                        {job.current && (
                          <span className="text-xs px-2 py-0.5 bg-violet-400/10 text-violet-400 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm mt-0.5">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <p className="text-slate-500 text-sm font-mono shrink-0">
                      {job.period}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-slate-900 text-violet-400 rounded-full border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
