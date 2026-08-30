const VALUES = [
  {
    no: "01",
    title: "정직한 소재",
    desc: "원산지와 생산 과정을 투명하게 공개하며, 사람과 환경에 부담을 주지 않는 소재를 선택합니다.",
  },
  {
    no: "02",
    title: "시간을 견디는 디자인",
    desc: "한 시즌이 아닌 여러 해를 입을 수 있는 형태와 색을 연구합니다. 유행보다 오래 남는 것을 지향합니다.",
  },
  {
    no: "03",
    title: "사람 중심 제작",
    desc: "협력 공장의 공정한 노동 환경을 최우선으로 하며, 함께 성장하는 파트너십을 만듭니다.",
  },
  {
    no: "04",
    title: "순환하는 옷",
    desc: "수선과 리페어, 리세일 프로그램을 통해 옷의 수명을 늘리고 자원의 순환을 실천합니다.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/60">Our Values</p>
          <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] md:text-5xl">
            우리가 지키는 네 가지 약속
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.no} className="bg-primary px-8 py-12 md:px-10 md:py-14">
              <span className="font-serif text-2xl text-accent">{value.no}</span>
              <h3 className="mt-5 font-serif text-2xl font-medium md:text-3xl">{value.title}</h3>
              <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/70">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
