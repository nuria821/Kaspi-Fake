"use client"

import { useRef, useState } from "react"

type Banner = {
  id: number
  category: string
  badge: string
  dates: string
  bg: string
  text: string
  badgeBg: string
}

const banners: Banner[] = [
  {
    id: 1,
    category: "Мебель",
    badge: "0·0·12",
    dates: "15.12 – 31.12",
    bg: "bg-[#f8c9d4]",
    text: "text-[#4a2b33]",
    badgeBg: "bg-primary text-primary-foreground",
  },
  {
    id: 2,
    category: "ТВ, аудио, видео",
    badge: "5% Бонусов",
    dates: "15.12 – 31.12",
    bg: "bg-[#0f6fb5]",
    text: "text-white",
    badgeBg: "bg-[#d9a441] text-[#3a2b06]",
  },
  {
    id: 3,
    category: "Смартфоны",
    badge: "0·0·24",
    dates: "15.12 – 31.12",
    bg: "bg-[#e6efd6]",
    text: "text-[#33401f]",
    badgeBg: "bg-primary text-primary-foreground",
  },
  {
    id: 4,
    category: "Красота",
    badge: "10% Бонусов",
    dates: "15.12 – 31.12",
    bg: "bg-[#f3d9c0]",
    text: "text-[#4a3220]",
    badgeBg: "bg-[#8b5a2b] text-white",
  },
]

export function BannerCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / (el.clientWidth * 0.78))
    setActive(Math.min(index, banners.length - 1))
  }

  return (
    <div className="mt-1">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {banners.map((b) => (
          <button
            key={b.id}
            className={`relative flex aspect-[16/9] w-[78%] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl p-4 text-left ${b.bg} ${b.text}`}
          >
            <div className="flex items-start justify-between">
              <span className="text-base font-bold">{b.category}</span>
            </div>
            <span
              className={`w-fit rounded-md px-2 py-1 text-lg font-extrabold tabular-nums ${b.badgeBg}`}
            >
              {b.badge}
            </span>
            <span className="absolute bottom-3 right-4 text-xs font-semibold opacity-90">
              {b.dates}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-1 flex justify-center gap-1.5">
        {banners.map((b, i) => (
          <span
            key={b.id}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-4 bg-primary" : "w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
