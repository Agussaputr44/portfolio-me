import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";

// DATA DARI CV
const certs = [
    {
        id: 1,
        title: "Certified Junior Mobile Programmer",
        issuer: "BNSP (National Professional Certification Board)",
        date: "2024",
        image: "https://placehold.co/600x400/1e293b/a855f7?text=BNSP+Certified",
        link: "#",
        color: "from-purple-500 to-indigo-500"
    },
    {
        id: 2,
        title: "Flutter Developer Expert",
        issuer: "Dicoding Indonesia",
        date: "2024",
        image: "https://placehold.co/600x400/1e293b/06b6d4?text=Flutter+Expert",
        link: "#",
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: 3,
        title: "2nd Best Winner ICIF 2025",
        issuer: "ICIF 2025",
        date: "2025",
        image: "https://placehold.co/600x400/1e293b/ec4899?text=Winner+ICIF+2025",
        link: "#",
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 4,
        title: "Favorite Junior Developer ICIF 2024",
        issuer: "ICIF 2024",
        date: "2024",
        image: "https://placehold.co/600x400/1e293b/f59e0b?text=Favorite+Dev",
        link: "#",
        color: "from-amber-500 to-orange-500"
    },
    {
        id: 5,
        title: "Cloud Practitioner Essentials (AWS)",
        issuer: "Dicoding Indonesia",
        date: "2024",
        image: "https://placehold.co/600x400/1e293b/10b981?text=AWS+Cloud",
        link: "#",
        color: "from-emerald-500 to-teal-500"
    },
    {
        id: 6,
        title: "SOLID Programming Principles",
        issuer: "Dicoding Indonesia",
        date: "2024",
        image: "https://placehold.co/600x400/1e293b/6366f1?text=SOLID+Principles",
        link: "#",
        color: "from-indigo-500 to-violet-500"
    }
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-slate-100 dark:bg-white/5 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                            <Award className="text-purple-600 dark:text-purple-400" />
                            Certifications & Awards
                        </h2>
                        <p className="text-slate-600 dark:text-gray-400 max-w-lg">
                            Proven technical skills and professional achievements (BNSP & Awards).
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-400 dark:text-white/20 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-full">
                            <BadgeCheck size={18} /> Verified Credentials
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white dark:bg-[#0a0a0a] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
                        >
                            <div className="h-40 overflow-hidden relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 scale-90 group-hover:scale-100">
                                    <a href={cert.link} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg">
                                        <ExternalLink size={16} /> Show Credential
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-6 -mt-3 bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-2 py-1 rounded shadow-md">{cert.date}</div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">{cert.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-gray-500 font-mono flex items-center gap-2"><BadgeCheck size={12} className="text-cyan-500" /> {cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};