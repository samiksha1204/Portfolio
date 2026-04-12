// Contact.jsx — "Get In Touch" section with email CTA and social links.
// Reads: profile.contactBlurb, profile.social, profile.location

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-10">
          Get In Touch
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {profile.contactBlurb}
        </motion.p>
        <motion.div {...fadeUp}>
          <a
            href={`mailto:${profile.social.email}`}
            className="inline-block px-8 py-4 border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-950 rounded font-semibold transition-all duration-200 mb-12"
          >
            Send an Email
          </a>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-slate-700 text-slate-400 hover:border-slate-400 hover:text-white text-sm rounded transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-slate-700 text-slate-400 hover:border-slate-400 hover:text-white text-sm rounded transition-all duration-200"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
