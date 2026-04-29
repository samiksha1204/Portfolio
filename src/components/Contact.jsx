import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const openGmail = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.social.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const openOutlook = () => {
    const url = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(profile.social.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-6">
          Get In Touch
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {profile.contactBlurb}
        </motion.p>

        <motion.div {...fadeUp}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="px-6 py-3 bg-sky-400 text-slate-950 font-semibold rounded-lg hover:bg-sky-300 transition-colors duration-200 mb-8"
          >
            {open ? "Close" : "Send a Mail"}
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="max-w-lg mx-auto mb-12 border border-slate-700 rounded-xl p-6 text-left space-y-4 bg-slate-900/50"
            >
              {/* To field — read only */}
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-1 block">
                  To
                </label>
                <div className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 text-sm font-mono">
                  {profile.social.email}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-1 block">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400 transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-1 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-400 transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={openGmail}
                  disabled={!subject.trim() || !message.trim()}
                  className="flex-1 py-3 bg-sky-400 text-slate-950 font-semibold rounded-lg hover:bg-sky-300 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send via Gmail
                </button>
                <button
                  onClick={openOutlook}
                  disabled={!subject.trim() || !message.trim()}
                  className="flex-1 py-3 border border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400 hover:text-slate-950 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send via Outlook
                </button>
              </div>
              <p className="text-slate-600 text-xs text-center pt-1">
                You'll be asked to sign in to your account if you're not already logged in.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social links */}
        <motion.div
          {...fadeUp}
          className="flex items-center justify-center gap-4"
        >
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400 hover:text-slate-950 transition-all duration-200"
            >
              GitHub
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400 hover:text-slate-950 transition-all duration-200"
            >
              LinkedIn
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
