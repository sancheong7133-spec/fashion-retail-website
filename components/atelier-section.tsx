export function AtelierSection() {
  return (
    <section id="atelier" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden">
              <img
                src="/images/atelier.png"
                alt="NORDE 아틀리에에서 진행되는 봉제와 마감 작업"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">The Atelier</p>
            <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-5xl">
              한 벌의 옷에 담기는 서른 명의 손
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-foreground/80">
              서울 성수동 아틀리에에서 패턴사와 봉제 장인이 함께 샘플을 완성합니다. 원단의 결을 살리는 재단,
              눈에 보이지 않는 안감의 마감까지 — 우리는 완성도를 타협하지 않습니다.
            </p>

            <ul className="mt-10 divide-y divide-border border-y border-border">
              {[
                { title: "책임 있는 소재", desc: "인증된 울과 유기농 코튼, 재생 소재를 우선 사용합니다." },
                { title: "소량 생산", desc: "재고를 최소화하고 필요한 만큼만 정교하게 생산합니다." },
                { title: "평생 수선", desc: "구매 후에도 오래 입을 수 있도록 수선 서비스를 제공합니다." },
              ].map((row) => (
                <li key={row.title} className="flex gap-6 py-5">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                      {row.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{row.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
