import Image from "next/image"

type Product = {
  name: string
  image: string
}

const products: Product[] = [
  { name: "Смартфон Apple iPhone 17 Pro 256Gb оранжевый", image: "/products/iphone.png" },
  { name: "Папка-органайзер Sima-land радужная", image: "/products/folder.png" },
  { name: "Ноутбук ультрабук 15.6 серебристый", image: "/products/laptop.png" },
  { name: "Наушники беспроводные белые", image: "/products/headphones.png" },
]

export function RecentlyViewed() {
  return (
    <section className="py-4">
      <h2 className="px-4 text-base font-bold text-foreground">Вы недавно смотрели</h2>
      <div className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {products.map((p) => (
          <button key={p.name} className="flex w-28 shrink-0 flex-col text-left">
            <div className="flex aspect-square w-28 items-center justify-center overflow-hidden rounded-xl bg-card p-2">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={p.name}
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="mt-1.5 line-clamp-2 text-xs text-foreground">{p.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
