import { platformData } from "@/lib/data"
import { ArrowRight, CalendarCheck, ScanFace, Sparkles } from "lucide-react"

const icons = {
  scan: ScanFace,
  sparkles: Sparkles,
  calendar: CalendarCheck,
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-frame px-4 py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0f315d_0%,#174271_50%,#1d568a_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,209,255,0.14),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Experiencia</p>
          <h2 className="mt-3 font-display text-5xl leading-none text-foreground md:text-6xl">3 PASOS</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/66">Un flujo simple, de la idea a la reserva.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {platformData.howItWorks.map((step, index) => {
            const Icon = icons[step.icon as keyof typeof icons]
            const isLast = index === platformData.howItWorks.length - 1

            return (
              <div key={step.step} className="relative">
                {!isLast && (
                  <div className="absolute left-[70%] top-16 hidden h-px w-[64%] bg-gradient-to-r from-primary/45 to-transparent lg:block">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-primary/70" />
                  </div>
                )}
                <div className="fx-hover-lift fx-shimmer h-full rounded-[2rem] border border-primary/14 bg-[linear-gradient(180deg,rgba(31,92,156,0.92),rgba(20,72,128,0.92))] p-8 shadow-[0_24px_80px_rgba(24,71,119,0.18)]">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-primary/20 bg-[rgba(79,209,255,0.10)]">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-display text-5xl leading-none text-primary/22">0{step.step}</span>
                  </div>
                  <h3 className="font-display text-3xl leading-none text-foreground">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/64">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
