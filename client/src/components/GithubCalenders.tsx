import { useQuery } from '@tanstack/react-query';
import { fetchGithub } from '../services/api';

export const GithubCalendar = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['github'],
    queryFn: fetchGithub,
  });

  if (isLoading) return <div className="text-slate-500 dark:text-gray-500 animate-pulse text-sm">Loading data...</div>;
  if (isError) return <div className="text-red-500 dark:text-red-400 text-sm">Gagal memuat data.</div>;

  return (
    // CARD CONTAINER:
    // Light: bg-white/50 border-slate-200 shadow-sm
    // Dark: bg-white/5 border-white/10
    <div className="w-full p-6 rounded-2xl border transition-colors duration-300
                    bg-white/50 border-slate-200 
                    dark:bg-white/5 dark:border-white/10 
                    backdrop-blur-md hover:border-purple-300 dark:hover:border-white/20">
      
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">GitHub Activity</h3>
        
        {/* BADGE COMMITS: */}
        {/* Light: bg-cyan-100 text-cyan-700 */}
        {/* Dark: bg-cyan-900/30 text-cyan-300 */}
        <span className="font-mono text-xs px-3 py-1 rounded-full border transition-colors duration-300
                         bg-cyan-100 text-cyan-700 border-cyan-200
                         dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-500/30">
          {data?.total} commits / year
        </span>
      </div>

      <div className="flex flex-wrap gap-1 justify-center md:justify-start">
        {data?.contributions.map((day, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-sm transition-all hover:scale-125 hover:shadow-lg"
            style={{ 
              // Logika warna contribution (disesuaikan sedikit untuk light mode jika perlu, tapi default github color biasanya aman)
              backgroundColor: day.contributionCount > 0 
                ? day.color 
                : 'var(--contribution-empty)' // Kita akali pakai CSS variable atau logic di bawah
            }}
            // Trik untuk warna empty cell:
            // Light mode: abu-abu sangat muda (slate-200)
            // Dark mode: transparent putih (white/5)
          >
             {/* Karena style inline sulit pakai tailwind class dynamic, kita inject class kosongnya di sini */}
             <div className={`w-full h-full rounded-sm ${day.contributionCount === 0 ? 'bg-slate-200 dark:bg-white/5' : ''}`} 
                  style={{ backgroundColor: day.contributionCount > 0 ? day.color : undefined }} 
             />
          </div>
        ))}
      </div>
    </div>
  );
};