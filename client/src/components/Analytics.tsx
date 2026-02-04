import { motion } from "framer-motion";

export const Analytics = () => {
  const UMAMI_SHARE_URL = "https://cloud.umami.is/share/54FFWuyQj4tjVJd0";

  return (
    <section id="analytics" className="py-24 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Open Metrics
        </h2>
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
I believe in transparency. Here are the real-time visitor statistics for this website.        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl mx-auto h-[495px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-1xl bg-white dark:bg-[#050505]"
      >
        <iframe
          src={UMAMI_SHARE_URL}
          className="w-full h-full"
          frameBorder="0"
          loading="lazy"
          title="Umami Analytics"
        ></iframe>
      </motion.div>
    </section>
  );
};