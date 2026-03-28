export const boardReadStyles = {
  card: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",

  header: {
    wrap: "border-b border-slate-200 px-6 py-5 dark:border-slate-700",
    title: "text-lg font-bold text-slate-800 dark:text-slate-100",
    meta: "mt-2 flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500",
    dot: "h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600",
  },

  body: "min-h-48 whitespace-pre-wrap px-6 py-6 text-sm leading-relaxed text-slate-700 dark:text-slate-300",

  footer: "border-t border-slate-100 px-6 py-4 flex items-center justify-between dark:border-slate-800",

  actions: "flex items-center gap-2",

  listButton:
    "text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",

  editButton:
    "rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950",

  deleteButton:
    "rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/30 dark:focus:ring-offset-slate-950",

  confirm: {
    wrap: "border-t border-red-100 bg-red-50 px-6 py-4 dark:border-red-900/40 dark:bg-red-950/20",
    text: "mb-3 text-sm font-medium text-red-700 dark:text-red-400",
    actions: "flex items-center gap-2",
    confirmButton:
      "rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-slate-950",
    cancelButton:
      "rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950",
  },

  deleteError:
    "mx-6 mb-0 mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/40 dark:text-red-400",

  notFound:
    "flex flex-col items-center justify-center gap-3 py-20 text-slate-400 dark:text-slate-500",
  notFoundText: "text-sm",

  loading: "flex items-center justify-center py-20 text-slate-400 dark:text-slate-500 text-sm",
  error: "flex items-center justify-center py-20 text-red-500 text-sm",
};
