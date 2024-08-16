import { baseUrl } from "../utils/constant"
import axios from "axios"

export async function getAll(url, query,limit, page){
  const res = await axios.get(url+query,{
    params:{
      page:page,
      limit:limit,
    }
  })
  return res.data
}

export async function getAuthor(url, authorId){
  const res = await axios.get(url+authorId+'.json')
  return res.data
}

export async function getBookDetails(url, bookId){
  const res = await axios.get(url+bookId+'.json')
  return res.data
}