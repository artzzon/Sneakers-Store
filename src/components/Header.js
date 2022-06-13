import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <img
            width={40}
            height={40}
            src="img/logo.png"
            alt="Магазин кроссовок"
          />
        </Link>
        <div className="header-info">
          <h2>React Sneakers</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="header-right">
        <li onClick={() => props.onClickCart(true)}>
          <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to={"/favorites"}>
            <img
              width={18}
              height={18}
              src="img/heart.svg"
              alt="Список желаемого"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}

export default Header;