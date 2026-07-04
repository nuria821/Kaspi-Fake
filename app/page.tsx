"use client"

import { useState } from "react"
import { LockScreen } from "@/components/lock-screen"
import { AppHeader } from "@/components/app-header"
import { BannerCarousel } from "@/components/banner-carousel"
import { ServiceGrid } from "@/components/service-grid"
import { PromoList } from "@/components/promo-list"
import { RecentlyViewed } from "@/components/recently-viewed"
import { BottomNav } from "@/components/bottom-nav"
import { GosuslugiScreen } from "@/components/gosuslugi-screen"

export default function Page() {
  const [locked, setLocked] = useState(true)
  const [screen, setScreen] = useState<"home" | "gosuslugi">("home")

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      {locked && <LockScreen onUnlock={() => setLocked(false)} />}

      {screen === "gosuslugi" ? (
        <GosuslugiScreen onBack={() => setScreen("home")} />
      ) : (
        <>
          <AppHeader />

          <div className="flex-1">
            <BannerCarousel />
            <ServiceGrid onOpenGosuslugi={() => setScreen("gosuslugi")} />
            <PromoList />
            <RecentlyViewed />
          </div>

          <BottomNav />
        </>
      )}
    </main>
  )
}
