// Static replacement — previously called our own backend (which called the
// GitHub GraphQL API with a server-side token). Since that backend is offline,
// and a GitHub token can't safely live in frontend code, this now renders a
// public, unauthenticated contribution chart image instead. No API calls.

const GITHUB_USERNAME = "Agussaputr44";
const CHART_COLOR = "8b5cf6"; // purple, matches the site's accent color
const CHART_URL = `https://ghchart.rshah.org/${CHART_COLOR}/${GITHUB_USERNAME}`;

export const GithubCalendar = () => {
  return (
    <div className="w-full p-6 rounded-2xl border transition-colors duration-300
                    bg-white/50 border-slate-200 
                    dark:bg-white/5 dark:border-white/10 
                    backdrop-blur-md hover:border-purple-300 dark:hover:border-white/20">

      <div className="flex justify-between items-end mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">GitHub Activity</h3>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs px-3 py-1 rounded-full border transition-colors duration-300
                     bg-cyan-100 text-cyan-700 border-cyan-200
                     dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-500/30
                     hover:opacity-80"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>

      <div className="overflow-x-auto">
        <img
          src={CHART_URL}
          alt={`${GITHUB_USERNAME}'s GitHub contribution chart`}
          className="min-w-[600px] w-full rounded-lg"
          loading="lazy"
          onError={(e) => {
            // If the third-party chart service is ever unavailable, fall back
            // to a simple text link instead of a broken image icon.
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fallback = document.getElementById("gh-chart-fallback");
            if (fallback) fallback.style.display = "block";
          }}
        />
        <p id="gh-chart-fallback" style={{ display: "none" }} className="text-sm text-slate-500 dark:text-gray-500">
          Couldn't load the contribution chart —{" "}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-500"
          >
            view it directly on GitHub
          </a>.
        </p>
      </div>
    </div>
  );
};
