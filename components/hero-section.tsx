export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/images/hero.png"
        alt="MAISON NORDE 시즌 캠페인 - 뉴트럴 톤의 테일러드 코트를 착용한 모델"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-28 lg:px-10 lg:pb-24">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-foreground/70">
          Autumn / Winter Collection 2026
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.02] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          입는 순간, 태도가 된다
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 md:text-lg">
          MAISON NORDE는 절제된 실루엣과 정직한 소재로 일상의 품격을 완성합니다. 유행이 아닌 시간을 견디는 옷을
          만듭니다.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#collections"
            className="inline-flex items-center bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            컬렉션 보기
          </a>
          <a
            href="#brand"
            className="inline-flex items-center border border-foreground/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
          >
            브랜드 스토리
          </a>
        </div>
      </div>
    </section>
  )
}
