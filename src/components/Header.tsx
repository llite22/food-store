import {FC} from 'react'
import login from "../assets/img/login.png";
import cart from "../assets/img/cart.png";
const Header: FC = () => {
  return (
    <header>
    <div className="logo">Chow/</div>
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Resturants</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <div className="header__icons">
      <img
        className="login"
        width={30}
        height={30}
        src={login}
        alt="login"
      />
      <div className="cart__circle">
        <div className="circle">0</div>
        <img
          className="cart"
          width={30}
          height={30}
          src={cart}
          alt="cart"
        />
      </div>
    </div>
  </header>

  )
}

export default Header