import Image from "next/image"

export function FooterClean() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#071b3a]">
      <div className="relative aspect-[2624/1451] w-full overflow-hidden">
        <Image
          src="/rri.png"
          alt="Ice Cold Barbershop footer"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />

        <div className="absolute bottom-0 left-0 right-0 h-[10.5%] bg-[linear-gradient(180deg,rgba(5,12,28,0.3),rgba(7,18,42,0.96)_25%,#081533_100%)]" />
      </div>
    </footer>
  )
}
