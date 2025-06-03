import { create } from "zustand"

export const useCardState = create<{
  isCelsius: boolean
  setIsCelsius: (isCelsius: boolean) => void
}>((set) => ({
  isCelsius: true,
  setIsCelsius: (isCelsius: boolean) => set({ isCelsius }),
}))
