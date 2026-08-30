import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ContactFooter } from "@/components/contact-footer"

export const metadata: Metadata = {
  title: "채용정보 — MAISON NORDE",
  description: "MAISON NORDE 패션 MD 채용 안내. 자격 요건과 지원 방법을 확인하세요.",
}

const REQUIREMENTS = [
  "패션, 의류, 유통, 경영 관련 전공 또는 그에 준하는 실무 경력",
  "패션 MD, 바잉, 상품기획 분야 경력 3년 이상",
  "시즌 컬렉션 구성, 수량 계획, 재고 운영을 직접 수행한 경험",
  "판매 데이터 분석과 수요 예측을 바탕으로 상품 의사결정을 한 경험",
  "Excel 등 데이터 도구를 활용한 상품·매출 관리 역량",
]

const PREFERRED = [
  "컨템포러리 또는 디자이너 브랜드 MD 경험",
  "해외 소싱, 글로벌 바잉, 또는 수입 브랜드 운영 경험",
  "영어 커뮤니케이션이 가능한 분",
  "지속가능 소재와 공급망에 대한 이해",
]

const RESPONSIBILITIES = [
  "시즌별 상품 구색과 물량을 기획하고, 브랜드 철학에 맞는 큐레이션을 책임집니다.",
  "디자인, 생산, 리테일 팀과 협업하여 출시 일정과 재고를 조율합니다.",
  "매장 판매 데이터를 분석하고 리오더·마크다운 등 운영 결정을 내립니다.",
  "트렌드를 따르기보다, 오래 입히는 상품이 매장에 남도록 관리합니다.",
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-background pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Careers</p>
            <h1 className="mt-6 text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-5xl">
              채용정보
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              MAISON NORDE와 함께 시간을 견디는 옷을 기획할 동료를 찾습니다. 지금은 패션 MD를 모집합니다.
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Open Position</p>
                <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">패션 MD</h2>
                <p className="mt-2 text-sm tracking-[0.12em] text-muted-foreground">Merchandiser</p>
                <dl className="mt-10 space-y-5 border-t border-border pt-8">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">고용 형태</dt>
                    <dd className="mt-1 text-foreground">정규직</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">근무지</dt>
                    <dd className="mt-1 text-foreground">서울 성수 아틀리에 · 본사</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">지원</dt>
                    <dd className="mt-1">
                      <a href="mailto:careers@maisonnorde.com" className="text-foreground hover:text-accent">
                        careers@maisonnorde.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium text-foreground">하는 일</h3>
                <ul className="mt-6 space-y-4">
                  {RESPONSIBILITIES.map((item) => (
                    <li key={item} className="border-b border-border/70 pb-4 text-pretty text-sm leading-relaxed text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              <div className="bg-background px-8 py-12 md:px-10 md:py-14">
                <h3 className="font-serif text-2xl font-medium text-foreground">자격 요건</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">Required</p>
                <ul className="mt-8 space-y-4">
                  {REQUIREMENTS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background px-8 py-12 md:px-10 md:py-14">
                <h3 className="font-serif text-2xl font-medium text-foreground">우대 사항</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">Preferred</p>
                <ul className="mt-8 space-y-4">
                  {PREFERRED.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 max-w-2xl">
              <h3 className="font-serif text-2xl font-medium text-foreground">지원 방법</h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                이력서와 경력 기술서를 아래 메일로 보내 주세요. 제목에 [패션 MD 지원]과 성함을 함께 적어 주시면
                검토 후 개별 연락드립니다.
              </p>
              <a
                href="mailto:careers@maisonnorde.com?subject=%5B패션%20MD%20지원%5D"
                className="mt-8 inline-flex items-center border border-foreground/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                지원하기
              </a>
            </div>
          </div>
        </section>

        <ContactFooter />
      </main>
    </div>
  )
}
