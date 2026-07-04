"use client"

import { useState } from "react"
import { Home, QrCode, MessageSquare, LayoutGrid } from "lucide-react"

const items = [
  { key: "home", label: "Главная", icon: Home },
  { key: "qr", label: "Kaspi QR", icon: QrCode },
  { key: "messages", label: "Сообщения", icon: MessageSquare, badge: 1 },
  { key: "services", label: "Сервисы", icon: LayoutGrid },
]

export function BottomNav() {
  const [active, setActive] = useState("home")

  return (
    <nav className="sticky bottom-0 z-30 flex items-stretch justify-around border-t border-border bg-card pb-[env(safe-area-inset-bottom)]">
      {items.map((item) => {
        const isActive = active === item.key
        return (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`relative flex flex-1 flex-col items-center gap-1 py-2 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <span className="relative">
              <item.icon className="size-6" strokeWidth={isActive ? 2.25 : 1.75} />
              {item.badge && (
                <span className="absolute -right-2 -top-1.5 flex min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </span>
            <span className="text-[11px] font-medium">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
