import { create } from 'zustand'

export const usePagination = create((set) => ({
  page: 1,
  limit:10,
  setPage: (page) => {
    set({page:page})
  },
  setLimit: (limit) => {
    set({limit:limit})
  },
}))
