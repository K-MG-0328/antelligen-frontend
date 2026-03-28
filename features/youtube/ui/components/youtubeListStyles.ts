export const youtubeListStyles = {
  page: "min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-8",

  container: "mx-auto max-w-5xl",

  header: {
    wrap: "mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700",
    title: "text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100",
    badge: "rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white dark:bg-red-700",
  },

  grid: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",

  card: {
    wrap: "group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900",
    thumbnail: "relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800",
    img: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
    body: "p-4",
    title: "line-clamp-2 text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100",
    meta: "mt-2 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500",
    channel: "truncate max-w-[60%] font-medium text-blue-700 dark:text-blue-400",
    date: "tabular-nums",
  },

  loading: "flex items-center justify-center py-20 text-slate-400 dark:text-slate-500 text-sm",
  error: "flex items-center justify-center py-20 text-red-500 text-sm",

  empty: {
    wrap: "flex flex-col items-center justify-center gap-2 py-20 text-slate-400 dark:text-slate-500",
    icon: "text-4xl",
    text: "text-sm",
  },

  pagination: {
    wrap: "mt-8 flex items-center justify-center gap-3",
    btn: "rounded-lg border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950",
  },
};
