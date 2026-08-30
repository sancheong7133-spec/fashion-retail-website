export function CampaignSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/images/campaign.png"
        alt="NORDE 시즌 캠페인 - 건축적 공간을 배경으로 한 두 모델"
        className="h-[70vh] min-h-[420px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-background/80">Lookbook 2026</p>
        <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.05] text-background md:text-6xl">
          당신의 하루에 어울리는 한 벌
        </h2>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center bg-background px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          룩북 살펴보기
        </a>
      </div>
    </section>
  )
}
