import { useEffect } from "react";
import { useFetchAuthor } from "../hooks/useFetch";
import { authorUrl } from "../utils/constant";
import { getAuthor } from "../api/booksService";

function Author({authorId}) {

  const {author, setAuthor, error} = useFetchAuthor((state)=>({
    author: state.author,
    setAuthor: state.setAuthor,
    error: state.error,
  }))

  useEffect(()=>{
    setAuthor(getAuthor(authorUrl, authorId))
  },[])

  if(!error){
    return (
      <>
        <p>
          <b> Author: </b> {author?.name}
        </p>
      </>
    );
  }
}

export default Author;