"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Search,
  FileText,
  Home,
  HandCoins,
  Car,
  ReceiptText,
  IdCard,
  BookUser,
  GraduationCap,
} from "lucide-react"

const documents = [
  { label: "Удостоверение личности", icon: IdCard, tint: "bg-red-50 text-primary" },
  { label: "Паспорт гражданина РК", icon: BookUser, tint: "bg-sky-50 text-sky-600" },
  { label: "Студенческий билет", icon: GraduationCap, tint: "bg-indigo-50 text-indigo-600" },
]

const servicesList = [
  { label: "Справки", desc: "Социальные, по недвижимости и медицинские", icon: FileText },
  { label: "Прописка и снятие с прописки", desc: "по месту жительства", icon: Home },
  { label: "Пособия и выплаты", desc: "На ребенка, для многодетных, при потере работы", icon: HandCoins },
  { label: "Переоформление автомобиля", desc: "", icon: Car },
  { label: "Декларация по форме 270", desc: "О доходах и имуществе", icon: ReceiptText },
  { label: "Декларация по форме 250", desc: "Об активах и обязательствах", icon: ReceiptText },
]

export function GosuslugiScreen({ onBack }: { onBack: () => void }) {
  const [tab, setTab] = useState<"all" | "mine">("all")

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="sticky top-0 z-10 flex items-center gap-2 bg-card px-4 py-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Назад"
          className="flex size-8 items-center justify-center rounded-full text-foreground transition-opacity active:opacity-60"
        >
          <ChevronLeft className="size-6" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-foreground">Госуслуги</h1>
        <span className="size-8" aria-hidden />
      </header>

      <div className="flex gap-1 px-4 pb-3">
        <button
          type="button"
          onClick={() => setTab("all")}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors ${
            tab === "all" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
          }`}
        >
          Все услуги
        </button>
        <button
          type="button"
          onClick={() => setTab("mine")}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors ${
            tab === "mine" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
          }`}
        >
          Мои заявки
        </button>
      </div>

      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 rounded-xl bg-card px-3 py-2.5">
          <Search className="size-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Поиск по Госуслугам</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-4 pb-2">
        {documents.map((d) => (
          <button
            key={d.label}
            type="button"
            className="flex flex-col items-start gap-6 rounded-xl bg-card p-3 text-left transition-opacity active:opacity-70"
          >
            <span className={`flex size-9 items-center justify-center rounded-lg ${d.tint}`}>
              <d.icon className="size-5" />
            </span>
            <span className="text-xs font-medium leading-tight text-foreground text-pretty">{d.label}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex items-center justify-between px-4 py-3 text-primary transition-opacity active:opacity-60"
      >
        <span className="text-sm font-semibold">Все документы</span>
        <ChevronRight className="size-5" />
      </button>

      <ul className="mt-1 flex flex-col bg-card">
        {servicesList.map((s) => (
          <li key={s.label}>
            <button
              type="button"
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors active:bg-muted"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                <s.icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground">{s.label}</span>
                {s.desc && <span className="block text-xs text-muted-foreground text-pretty">{s.desc}</span>}
              </span>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
