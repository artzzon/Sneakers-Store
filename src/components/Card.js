import React, { useState } from "react";

function Card({ id, title, price, imgUrl, onPlus, onFavorite, favorited = false, isAdded = false }) {
  const [addToCart, setAddToCart] = useState(isAdded);
  const [addToFavorite, setAddToFavorite] = useState(favorited);
  
  const onClickAddToCart = () => {
    onPlus({ id, title, price, imgUrl });
    setAddToCart(!addToCart);
  };

  const onClickAddToFavorite = () => {
    onFavorite({id, title, price, imgUrl})
    setAddToFavorite(!addToFavorite);
  };

  return (
    <div className="catalog-item">
      <div className="favorite">
        <img
          onClick={onClickAddToFavorite}
          src={addToFavorite ? "img/catalog/heart-liked.svg" : "img/catalog/heart-unliked.svg"}
          alt="Добавить в избранное" />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Кроссовки" />
      <p>{title}</p>
      <div className="itemBottom">
        <div className="itemPrice">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className="addItem"
          onClick={onClickAddToCart}
          src={addToCart ? "img/catalog/added.svg" : "img/catalog/add.svg"}
          alt="Добавить в корзину"
        />
      </div>
    </div>
  );
}

export default Card;
