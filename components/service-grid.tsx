"use client"

import {
  ShoppingCart,
  Smartphone,
  Landmark,
  ArrowLeftRight,
  Plane,
  Building2,
  Newspaper,
  type LucideIcon,
} from "lucide-react"

type Service = {
  label: string
  href?: string
  icon?: LucideIcon
  custom?: "magnum"
  action?: "gosuslugi"
}

const services: Service[] = [
  { label: "Магазин", icon: ShoppingCart, href: "https://kaspi.kz/shop/" },
  { label: "Мой Банк", icon: Smartphone, href: "https://kaspi.kz/bank/" },
  { label: "Платежи", icon: Landmark, href: "https://kaspi.kz/pay/" },
  { label: "Переводы", icon: ArrowLeftRight, href: "https://kaspi.kz/transfers/" },
  { label: "Magnum", custom: "magnum", href: "https://magnum.kz/" },
  { label: "Travel", icon: Plane, href: "https://kaspi.kz/travel/" },
  { label: "Госуслуги", icon: Building2, action: "gosuslugi" },
  { label: "Объявления", icon: Newspaper, href: "https://kaspi.kz/shop/c/kaspi%20objavlenia/" },
]

export function ServiceGrid({ onOpenGosuslugi }: { onOpenGosuslugi: () => void }) {
  return (
    <nav className="grid grid-cols-4 gap-y-5 px-4 py-5">
      {services.map((s) => {
        const iconEl = (
          <>
            <span className="flex size-8 items-center justify-center text-primary">
              {s.icon ? (
                <s.icon className="size-7" strokeWidth={1.75} />
              ) : (
                <span className="flex size-7 items-center justify-center rounded-md bg-primary text-base font-black italic text-primary-foreground">
                  m
                </span>
              )}
            </span>
            <span className="text-xs font-medium text-foreground">{s.label}</span>
          </>
        )

        if (s.action === "gosuslugi") {
          return (
            <button
              key={s.label}
              type="button"
              onClick={onOpenGosuslugi}
              className="flex flex-col items-center gap-2 transition-opacity active:opacity-60"
            >
              {iconEl}
            </button>
          )
        }

        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transition-opacity active:opacity-60"
          >
            {iconEl}
          </a>
        )
      })}
    </nav>
  )
}
