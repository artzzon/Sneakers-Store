import React from "react";

function Cart({ onClickCloseCart, onRemove, items = [] }) {
  const calculateTotal = () => {
    return items.reduce((total, item) => item.price + total, 0);
  };

  const calculateTax = () => {
    return ((calculateTotal() / 100) * 5).toFixed(2);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={() => onClickCloseCart(false)}
            className="closeCart"
            src="img/cart-remove.svg"
            alt="Закрыть корзину"
          />
        </h2>

        <div className="cartItems">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="cartItem">
                <img
                  className="cartImg"
                  width={70}
                  height={70}
                  src={item.imgUrl}
                  alt="Кроссовок"
                />
                <div className="cartDescription">
                  <p>{item.title}</p>
                  <b>{item.price} руб.</b>
                </div>
                <img
                  onClick={() => onRemove(item.id, item.mockId)}
                  className="removeBtn"
                  src="img/cart-remove.svg"
                  alt="Удалить из корзины"
                />
              </div>
            ))
          ) : (
            <div className="emptyCart">
              <img
                width={120}
                height={120}
                src="img/catalog/empty-cart.png"
                alt="Пустая корзина"
              />
              <div className="emptyCartDescription">
                <h3>Корзина пустая</h3>
                <p>
                  Добавьте хотя бы одну пару кроссовок, что бы сделать заказ.
                </p>
              </div>
              <button
                className="backToCatalog"
                onClick={() => onClickCloseCart(false)}
              >
                <img
                  src="img/catalog/back-to-catalog-arrow.png"
                  alt="Вернуться в каталог"
                />
                Вернуться в каталог
              </button>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cartTotal">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>{calculateTotal()} руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>{calculateTax()} руб.</b>
              </li>
            </ul>
            <button className="cartButton">
              Оформить заказ
              <img src="img/cartArrow.svg" alt="Оформить заказ" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
