"use client"

import { useState } from "react"
import { X, Delete, ScanFace, LogOut } from "lucide-react"

const PIN_LENGTH = 4

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState("")

  function handleDigit(digit: string) {
    if (code.length >= PIN_LENGTH) return
    const next = code + digit
    setCode(next)
    if (next.length === PIN_LENGTH) {
      // Любой 4-значный код разблокирует приложение
      onUnlock()
    }
  }

  function handleDelete() {
    setCode((c) => c.slice(0, -1))
  }

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-card">
      <header className="flex items-center justify-between px-5 py-4">
        <button aria-label="Закрыть" onClick={onUnlock} className="text-primary">
          <X className="size-7" strokeWidth={2.5} />
        </button>
        <button aria-label="Выйти" onClick={onUnlock} className="text-primary">
          <LogOut className="size-6" strokeWidth={2.5} />
        </button>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-8">
        <div className="flex size-20 items-center justify-center overflow-hidden rounded-full bg-muted">
          <svg viewBox="0 0 24 24" className="size-20 text-muted-foreground/50" fill="currentColor">
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6Z" />
          </svg>
        </div>

        <h1 className="mt-5 text-lg font-semibold text-foreground">Код быстрого доступа</h1>

        <div className="mt-6 flex gap-4" aria-hidden="true">
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <span
              key={i}
              className={`size-3 rounded-full transition-colors ${
                i < code.length ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 grid w-full max-w-xs grid-cols-3 gap-x-8 gap-y-6">
          {keys.map((key) => (
            <button
              key={key}
              onClick={() => handleDigit(key)}
              className="mx-auto text-4xl font-light text-foreground transition-opacity active:opacity-40"
            >
              {key}
            </button>
          ))}
          <button
            aria-label="Face ID"
            onClick={onUnlock}
            className="mx-auto flex items-center justify-center text-foreground transition-opacity active:opacity-40"
          >
            <ScanFace className="size-8" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => handleDigit("0")}
            className="mx-auto text-4xl font-light text-foreground transition-opacity active:opacity-40"
          >
            0
          </button>
          <button
            aria-label="Удалить"
            onClick={handleDelete}
            className="mx-auto flex items-center justify-center text-foreground transition-opacity active:opacity-40"
          >
            <Delete className="size-8" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
