import { create } from 'zustand'

export const useUserQuery = create((set) => ({
  value: null,
  setValue: (value) => {
    set({value:value})
  },
}))