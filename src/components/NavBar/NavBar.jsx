import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logoZapato from '../../img/logoZapato.jpg'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <div className='logo'>
          <h1 className='titulo'>En tus Pies</h1>
          <img className='imgZapato' src={logoZapato} alt="Zapato" />
        </div>
      </Link>

      <nav>
        <ul>
          <li> <NavLink to={`/categoria/botas`}> Botas </NavLink> </li>
          <li> <NavLink to={`/categoria/sandalias`}> Sandalias </NavLink> </li>
          <li> <NavLink to={`/categoria/zapatos`}> Zapatos </NavLink> </li>
          <li> <NavLink to={`/categoria/chatitas`}> Chatitas </NavLink> </li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar
