export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Outer pulsating ring */}
        <div className="absolute inset-0 animate-ping rounded-full border-2 border-blue-500 opacity-20"></div>
        {/* Spinning gradient ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600 border-l-blue-400"></div>
        {/* Inner solid dot */}
        <div className="h-6 w-6 animate-pulse rounded-full bg-blue-600 shadow-lg shadow-blue-500/50"></div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-200">Cargando contenido</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Por favor, espera un momento...</p>
      </div>
    </div>
  );
}
