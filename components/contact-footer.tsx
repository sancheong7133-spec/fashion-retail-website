const STORES = [
  { city: "서울 · 성수", address: "성동구 연무장길 45, 1F", hours: "매일 11:00 – 20:00" },
  { city: "서울 · 한남", address: "용산구 이태원로 254, 2F", hours: "매일 11:00 – 20:00" },
  { city: "부산 · 전포", address: "부산진구 전포대로 199, 1F", hours: "매일 11:00 – 20:00" },
]

export function ContactFooter() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Visit & Contact</p>
            <h2 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-5xl">
              매장에서 직접 만나보세요
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              NORDE의 소재와 마감은 직접 만져볼 때 가장 잘 전해집니다. 가까운 매장에 방문하시거나 아래로 문의해
              주세요.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">General</p>
                <a href="mailto:hello@maisonnorde.com" className="mt-1 block text-lg text-foreground hover:text-accent">
                  hello@maisonnorde.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Press</p>
                <a href="tel:+82212345678" className="mt-1 block text-lg text-foreground hover:text-accent">
                  +82 2 1234 5678
                </a>
              </div>
            </div>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {STORES.map((store) => (
              <div key={store.city} className="flex items-start justify-between gap-6 py-6">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground">{store.city}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{store.address}</p>
                </div>
                <span className="mt-1 shrink-0 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {store.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-serif text-2xl font-medium tracking-[0.3em] text-foreground">NORDE</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              MAISON NORDE — 시간을 견디는 옷을 만드는 컨템포러리 패션 하우스.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="푸터 메뉴">
            {[
              { label: "브랜드", href: "/#brand" },
              { label: "컬렉션", href: "/#collections" },
              { label: "아틀리에", href: "/#atelier" },
              { label: "지속가능성", href: "/#values" },
              { label: "채용", href: "/careers" },
              { label: "고객센터", href: "/#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-10">
            <p>© 2026 MAISON NORDE. All rights reserved.</p>
            <p className="tracking-[0.14em] uppercase">Seoul · Busan · Made with care</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
