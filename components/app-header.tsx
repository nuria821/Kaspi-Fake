"use client"

import { Search, ShoppingCart } from "lucide-react"

export function AppHeader({ cartCount = 9 }: { cartCount?: number }) {
  return (
    <header className="sticky top-0 z-30 bg-background px-4 pb-2 pt-3">
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Поиск по Kaspi.kz"
            aria-label="Поиск по Kaspi.kz"
            className="w-full rounded-xl bg-card py-2.5 pl-10 pr-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/40"
          />
        </div>
        <button aria-label="Корзина" className="relative shrink-0 text-foreground">
          <ShoppingCart className="size-7" strokeWidth={1.75} />
          {cartCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
