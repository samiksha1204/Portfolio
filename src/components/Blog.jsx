// Blog.jsx — "Thoughts & Writing" placeholder section.
// Reads: profile.blogBlurb

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
          Thoughts & Writing
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-slate-400 text-base leading-relaxed mb-10 text-justify hyphens-auto"
        >
          {profile.blogBlurb}
        </motion.p>
        <motion.div
          {...fadeUp}
          className="border border-dashed border-slate-800 rounded-lg p-8 sm:p-12 text-center"
        >
          <p className="text-slate-500 text-sm">First post coming soon</p>
        </motion.div>
      </div>
    </section>
  );
}
