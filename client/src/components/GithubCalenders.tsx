import { useQuery } from '@tanstack/react-query';
import { fetchGithub } from '../services/api';

export const GithubCalendar = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['github'],
    queryFn: fetchGithub,
  });

  if (isLoading) return <div className="text-gray-500 animate-pulse text-sm">Loading data...</div>;
  if (isError) return <div className="text-red-400 text-sm">Gagal memuat data.</div>;

  return (
    // GLASS EFFECT
    <div className="w-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-colors">
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
        <span className="text-cyan-300 font-mono text-xs bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30">
          {data?.total} commits / year
        </span>
      </div>

      <div className="flex flex-wrap gap-1 justify-center md:justify-start">
        {data?.contributions.map((day, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-sm transition-all hover:scale-125 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            style={{ 
              backgroundColor: day.contributionCount > 0 ? day.color : 'rgba(255, 255, 255, 0.05)', 
            }}
            title={`${day.date}: ${day.contributionCount}`}
          />
        ))}
      </div>
    </div>
  );
};