import homeIMG from '../../public/images/home-img.svg'
import '../assets/styles/home.scss'

function Home() {
  return (
    <div className='home'>
      <img src={homeIMG} alt="" className='home__img'/>
      <h1>Enter the title of the book</h1>
    </div>
  )
}

export default Home;