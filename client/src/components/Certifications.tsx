import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck, Loader2 } from "lucide-react";
import { fetchCertificates } from "../services/api";
import { Certificate } from "../types";

export const Certifications = () => {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCerts = async () => {
      try {
        const data = await fetchCertificates();
        const sortedData = data.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        setCerts(sortedData);
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getCerts();
  }, []);

  // fix import react never used




  const getVariant = (id: number) => {
    const variants = [
      { color: "from-purple-600 to-indigo-600", bg: "1e1b4b", text: "a855f7" }, 
      { color: "from-cyan-500 to-blue-600", bg: "083344", text: "22d3ee" },    
      { color: "from-rose-500 to-pink-600", bg: "450a0a", text: "fb7185" },    
      { color: "from-amber-500 to-orange-600", bg: "451a03", text: "fbbf24" }, 
      { color: "from-emerald-500 to-teal-600", bg: "022c22", text: "34d399" }, 
    ];
    return variants[id % variants.length];
  };

  return (
    <section id="certifications" className="py-24 bg-slate-100 dark:bg-black/40 scroll-mt-20 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
              <Award className="text-purple-500" />
              Certifications & Awards
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-lg">
              Official recognition of my technical expertise and professional milestones.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-400 dark:text-white/20 border border-white/10 px-4 py-2 rounded-full">
              <BadgeCheck size={18} /> Verified Credentials
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-purple-500 animate-spin mb-4" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((cert, idx) => {
              const variant = getVariant(idx);
              const placeholderText = encodeURIComponent(cert.title);
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
                >
                  {/* Bagian Image Placeholder yang Colorful */}
                  <div className="h-44 overflow-hidden relative">
                    {/* Overlay Gradasi saat Hover (Lebih Terang) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${variant.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                    
                    {/* Placeholder Image dengan Teks Berwarna cerah */}
                    <img
                      src={`https://placehold.co/600x400/${variant.bg}/${variant.text}?text=${placeholderText}&font=playfair`}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    {/* Tombol Floating */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      <a
                        href={cert.pdf_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-lg font-bold text-sm shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all"
                      >
                        <ExternalLink size={16} /> Show Credential
                      </a>
                    </div>
                  </div>

                  {/* Konten Text */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                       <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight">
                        {cert.title}
                      </h3>
                      <span className="bg-slate-900 dark:bg-white/10 text-white dark:text-white text-[10px] font-black px-2 py-1 rounded ml-2">
                        {cert.year}
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-500 dark:text-gray-500 font-medium flex items-center gap-2 mt-auto">
                      <BadgeCheck size={14} className="text-cyan-500" /> 
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
