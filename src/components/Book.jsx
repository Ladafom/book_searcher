import { useEffect, useState } from 'react';
import '../assets/styles/book.scss'
import { Link} from 'react-router-dom';

function Book({bookImg,author,name, id}) {

  const [isImgLoaded, setIsImgLoaded] = useState(false)
  useEffect(()=>{
    const img = new Image()
    img.onload = () => {
      setIsImgLoaded(true)
    }
    img.src = bookImg
  },[bookImg])

  return (
    <>
      <div className="book">
        <Link to={`/books/${id}`} className='book__link'>
          {!isImgLoaded && <div className='book__img-plug' ></div> }
          <img src={bookImg} alt="" loading="lazy" />
        </Link>
        <h3>
          {name}
        </h3>
        <p>
          {author}
        </p>
      </div>
    </>
  );
}

export default Book;