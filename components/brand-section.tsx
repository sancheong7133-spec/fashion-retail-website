const STATS = [
  { value: "2009", label: "브랜드 설립" },
  { value: "48", label: "국내외 매장" },
  { value: "100%", label: "책임 소재 사용" },
]

export function BrandSection() {
  return (
    <section id="brand" className="border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Our Philosophy</p>
            <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-5xl">
              옷은 사람을 담는 가장 가까운 건축입니다
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-pretty text-lg leading-relaxed text-foreground/80">
              MAISON NORDE는 &lsquo;덜어냄의 미학&rsquo;에서 시작합니다. 우리는 계절마다 버려지는 옷이 아니라, 오래
              곁에 두고 입을수록 깊어지는 옷을 만듭니다. 실루엣은 몸을 편안하게 감싸고, 소재는 시간이 지날수록 그
              사람만의 결을 갖습니다.
            </p>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              디자인부터 봉제, 마감까지 모든 과정에 장인의 손길을 담아 정직한 완성도를 지향합니다. 유행을 좇기보다
              한 사람의 태도를 완성하는 브랜드가 되고자 합니다.
            </p>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-background px-8 py-10">
              <dt className="font-serif text-5xl font-medium text-foreground md:text-6xl">{stat.value}</dt>
              <dd className="mt-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
