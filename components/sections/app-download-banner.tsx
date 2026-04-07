import Image from "next/image"

export function AppDownloadBanner() {
  return (
    <section className="section-frame bg-[#081533] px-4 pb-8 pt-2 md:px-6 md:pb-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/12 bg-[#071b3a]/60 shadow-[0_24px_70px_rgba(2,10,24,0.32)]">
        <div className="relative aspect-[4590/928] w-full">
          <Image
            src="/app-download-banner.png"
            alt="Descarga la app Ice Cold en App Store y Google Play"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
