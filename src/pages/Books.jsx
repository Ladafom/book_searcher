import { useUserQuery } from "../hooks/useQuery";
import { usePagination } from "../hooks/usePagination";
import { useFetchBooks } from "../hooks/useFetch";
import { LoadingOutlined } from '@ant-design/icons';
import '../assets/styles/book-list.scss'
import { bookCoverUrl } from "../utils/constant";
import Book from "../components/Book";
import '../assets/styles/layout.scss'
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { getAll } from "../api/booksService";
import { baseUrl } from "../utils/constant";

function Books() {

  const { books, setBooks, isLoading, error} = useFetchBooks((state) => ({
    books: state.books,
    setBooks: state.setBooks,
    isLoading: state.isLoading,
    error: state.error,
  }))
  const {page, limit} = usePagination((state)=>({
    page: state.page,
    limit: state.limit,
  }))
  const value = useUserQuery((state)=>state.value)

  useEffect(()=>{
    if(value)
    setBooks(getAll(baseUrl,value,limit,page))
  },[value,page,limit])

  if(error){
    return(
      <h1 className="book-list__error">{error} :(</h1>
    )
  }
  if(!value){
    return(
      <h1 className="book-list__loader">
        No books :(
      </h1>
    )
  }
  if(isLoading){
    return(
      <h1 className="book-list__loader">
        <LoadingOutlined />
        Loading books
      </h1>
    )
  } else {
    return(
      <div className="layout">
        <div className="book-list">
          {
            books?.docs.map((book)=>(
              <Book
                bookImg={book.cover_i? `${bookCoverUrl}${book.cover_i}-M.jpg` :
                  '/images/book_no_img.png'}
                author={book.author_name} name={book.title} key={book.key} id={book.key.split("/").slice(2)}
              />
          ))}
        </div>
        <Pagination/>
      </div>
    )
  }
}

export default Books;