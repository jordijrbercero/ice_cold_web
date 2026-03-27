export function AppDownload() {
  return (
    <section className="w-full bg-gradient-to-r from-[#031023] via-[#061a35] to-[#031023] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-sky-400/20 blur-2xl" />
            <img
              src="/icecold-logo.png"
              alt="Ice Cold Barbershop"
              className="relative h-20 w-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:h-24"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="h-10 w-56 rounded-md border border-white/10 bg-white/5" />
          </div>
        </div>
        <button className="rounded-full border border-sky-300/40 bg-slate-900/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          Descarga la app
        </button>
      </div>
    </section>
  )
}
