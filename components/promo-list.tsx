import { PiggyBank, CreditCard, Wallet } from "lucide-react"
import type { ReactNode } from "react"

type Promo = {
  title: string
  subtitle: ReactNode
  icon: ReactNode
}

const promos: Promo[] = [
  {
    title: "Рассрочка 0-0-12",
    subtitle: "Оплата частями без переплаты",
    icon: (
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-xs font-extrabold leading-tight text-primary-foreground">
        0·0
        <br />
        12
      </span>
    ),
  },
  {
    title: "Кредит",
    subtitle: (
      <span>
        до 2 млн <span className="font-semibold">₸</span>
      </span>
    ),
    icon: (
      <span className="flex size-11 items-center justify-center rounded-xl bg-[#3aa76d] text-primary-foreground">
        <CreditCard className="size-6" strokeWidth={1.75} />
      </span>
    ),
  },
  {
    title: "Kaspi Red+",
    subtitle: "Рассрочка до 500 000 ₸",
    icon: (
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-[11px] font-black uppercase text-primary-foreground">
        Red
      </span>
    ),
  },
  {
    title: "Накопительный Депозит",
    subtitle: (
      <span>
        до <span className="font-bold text-primary">20%</span> годовых
      </span>
    ),
    icon: (
      <span className="flex size-11 items-center justify-center rounded-xl bg-[#3aa76d] text-primary-foreground">
        <PiggyBank className="size-6" strokeWidth={1.75} />
      </span>
    ),
  },
  {
    title: "Мой Банк",
    subtitle: "Карты, счета и переводы",
    icon: (
      <span className="flex size-11 items-center justify-center rounded-xl bg-[#0f6fb5] text-primary-foreground">
        <Wallet className="size-6" strokeWidth={1.75} />
      </span>
    ),
  },
]

export function PromoList() {
  return (
    <div className="mx-4 overflow-hidden rounded-2xl bg-card">
      {promos.map((p, i) => (
        <button
          key={p.title}
          className="flex w-full items-center gap-3 px-3 py-3 text-left transition-colors active:bg-muted"
        >
          {p.icon}
          <span className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">{p.title}</span>
            <span className="text-xs text-muted-foreground">{p.subtitle}</span>
          </span>
          {i < promos.length - 1 && (
            <span className="sr-only">Разделитель</span>
          )}
        </button>
      ))}
    </div>
  )
}
