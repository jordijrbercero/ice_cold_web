import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery/1.jpg", alt: "Detalle de barberia premium" },
  { src: "/images/gallery/2.jpg", alt: "Ambiente interior de barberia" },
  { src: "/images/gallery/3.jpg", alt: "Herramientas de barberia y estilo" },
  { src: "/images/gallery/4.jpg", alt: "Cliente en experiencia de barberia" },
]

export function GalleryShowcase() {
  return (
    <section className="section-frame px-4 py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b2345,#0a2347_55%,#081c39)]" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(79,209,255,0.16),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Atmosfera visual</p>
            <h2 className="mt-3 font-display text-5xl leading-none text-foreground md:text-6xl">
              Recomendaciones de cortes
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-foreground/64 md:text-lg"></p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <div key={image.src} className="noir-panel fx-hover-lift overflow-hidden rounded-[2rem]">
              <div className="relative overflow-hidden min-h-[18rem] md:min-h-[20rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,8,0.08),rgba(7,7,8,0.65))]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
