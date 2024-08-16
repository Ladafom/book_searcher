import errorImg from '../../public/images/error.svg'
import '../assets/styles/error.scss'

function Error() {
  return (
    <div className='error'>
      <img className='error__img' src={errorImg} alt="" />
      <h1>404</h1>
      <h3>Page not found</h3>
    </div>
  );
}

export default Error;