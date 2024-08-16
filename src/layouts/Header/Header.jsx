import { Outlet } from "react-router-dom";
import Navbar from './Navbar.jsx'
import SearchForm from "../../components/SearchForm.jsx";
import { BookOutlined }  from '@ant-design/icons'
import { Link } from "react-router-dom";
import '../../assets/styles/header.scss'

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__navigation">
          <Link to='/' className="header__logo">
            <BookOutlined
              className="header__logo__img"
              />
            <h2 className="header__log0__title">
              Book searcher
            </h2>
          </Link>
          <Navbar/>
        </div>

        <div className="header__content">
          <h2 className="header__content__title">
            Find your book
          </h2>
          <SearchForm/>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export default Header;