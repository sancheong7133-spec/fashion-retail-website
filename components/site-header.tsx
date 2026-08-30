"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "브랜드", href: "/#brand" },
  { label: "컬렉션", href: "/#collections" },
  { label: "아틀리에", href: "/#atelier" },
  { label: "가치", href: "/#values" },
  { label: "채용정보", href: "/careers" },
  { label: "문의", href: "/#contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const solid = scrolled || pathname !== "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-10">
        <Link href="/" className="font-serif text-xl font-medium tracking-[0.3em] text-foreground md:text-2xl">
          NORDE
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 xl:gap-9 md:flex" aria-label="주 메뉴">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-accent lg:text-xs ${
                  active ? "text-accent" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/#contact"
          className="hidden items-center border border-foreground/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground md:inline-flex"
        >
          매장 안내
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center p-2 text-foreground md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="모바일 메뉴">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-border/60 py-3.5 text-sm font-medium uppercase tracking-[0.18em] ${
                  pathname === link.href ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
