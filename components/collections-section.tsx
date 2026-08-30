const COLLECTIONS = [
  {
    name: "우먼스웨어",
    en: "Womenswear",
    desc: "부드러운 드레이핑과 절제된 라인으로 완성한 여성 컬렉션.",
    image: "/images/category-women.png",
    count: "124 스타일",
  },
  {
    name: "맨즈웨어",
    en: "Menswear",
    desc: "정교한 테일러링과 니트로 구성한 남성 컬렉션.",
    image: "/images/category-men.png",
    count: "98 스타일",
  },
  {
    name: "액세서리",
    en: "Accessories",
    desc: "가죽 소품과 실크, 미니멀 주얼리로 마무리하는 디테일.",
    image: "/images/category-accessories.png",
    count: "62 스타일",
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Collections</p>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-5xl">
              카테고리로 만나는 NORDE
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            모든 컬렉션은 하나의 팔레트 아래 유기적으로 연결되어, 자유롭게 조합할 수 있도록 설계되었습니다.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {COLLECTIONS.map((item) => (
            <a
              key={item.en}
              href="#contact"
              className="group relative block overflow-hidden bg-background"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.name} 컬렉션`}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.en}</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-foreground">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border px-6 py-4">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.count}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-foreground transition-colors group-hover:text-accent">
                  둘러보기 →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
