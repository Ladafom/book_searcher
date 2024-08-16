import { create } from 'zustand'

export const useFetchBooks = create((set) => ({
  books: null,
  error:null,
  isLoading:false,
  setBooks: async(callback) => {
    set({isLoading:true})
    try{
      set({books: await callback})
    }
    catch (e){
      set({error:e.message})
    }
    finally{
      set({isLoading:false})
    }
  },
}))

export const useFetchBookDetails = create((set) => ({
  details: null,
  error:null,
  isLoading:false,
  setBookDetails: async(callback) => {
    set({isLoading:true})
    try{
      set({details: await callback})
    }
    catch (e){
      set({error:e.message})
    }
    finally{
      set({isLoading:false})
    }
  },
}))

export const useFetchAuthor = create((set) => ({
  author: null,
  error:null,
  isLoading:false,
  setAuthor: async(callback) => {
    set({isLoading:true})
    try{
      set({author: await callback})
    }
    catch (e){
      set({error:e.message})
    }
    finally{
      set({isLoading:false})
    }
  },
}))