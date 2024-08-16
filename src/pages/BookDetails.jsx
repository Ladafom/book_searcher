import { useEffect, useState } from "react";
import { useFetchBookDetails } from "../hooks/useFetch";
import { getBookDetails } from "../api/booksService";
import { LoadingOutlined } from '@ant-design/icons';
import { bookDescriptionUrl,bookCoverUrl } from "../utils/constant";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Author from "../components/Author";
import '../assets/styles/details.scss'

function BookDetails() {

  const {details, setBookDetails, error, isLoading} = useFetchBookDetails((state)=>({
    details: state.details,
    setBookDetails: state.setBookDetails,
    error: state.error,
    isLoading: state.isLoading,
  }))

  let {bookId} = useParams()
  const bookImgSrc = details?.covers ? `${bookCoverUrl}${details?.covers[0]}-L.jpg` : '/images/book_no_img.png'

  useEffect(()=>{
    setBookDetails(getBookDetails(bookDescriptionUrl,bookId))
  },[])


  if(error){
    return(
      <h1 className="book__error">{error} :(</h1>
    )
  }

  if(isLoading){
    return(
      <h1 className="book-list__loader">
        <LoadingOutlined />
        Loading book info
      </h1>
    )
  } else {
    return (
      <div  className='layout'>
        <div className='details__main-info'>
          <div className='details__img-plug' >
            <img src={bookImgSrc} className='details__img' alt="" />
          </div>
          <h2> {details?.title}</h2>
          <ReactMarkdown className='md'>
            {details?.description?.value || details?.description || 'no descripton found' }
          </ReactMarkdown>
        </div>
        <div className="details__extra-info">
          { details?.authors && <Author authorId={details?.authors[0]?.author?.key.split('/').slice(2)}/>}
          <p>
            <b>First publish date: </b>{details?.first_publish_date || 'no data'}
          </p>
          <p>
            <b>Subject times: </b>{details?.subject_times?.join(', ') || ' no data'}
          </p>
          <p>
            <b>Subject places: </b>{details?.subject_places?.join(', ') || 'no data'}
          </p>
          <p>
            <b>Subjects: </b>{details?.subjects?.join(', ') || 'no data'}
          </p>
        </div>
      </div>
    )
  }

}

export default BookDetails;