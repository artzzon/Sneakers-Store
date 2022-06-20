import React, { useState } from "react";
import ContentLoader from "react-content-loader"

function Card({ id, title, price, imgUrl, onPlus, onFavorite, favorited = false, isAdded = false, isLoaded }) {
  const [addToCart, setAddToCart] = useState(isAdded);
  const [addToFavorite, setAddToFavorite] = useState(favorited);

  const onClickAddToCart = () => {
    onPlus({ id, title, price, imgUrl });
    setAddToCart(!addToCart);
  };
  console.log(addToCart);
  const onClickAddToFavorite = () => {
    onFavorite({ id, title, price, imgUrl })
    setAddToFavorite(!addToFavorite);
  };
  //
  return (
    <div className="catalog-item">
      {
        isLoaded ? (<ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="106" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="125" rx="5" ry="5" width="95" height="15" />
          <rect x="0" y="162" rx="5" ry="5" width="80" height="24" />
          <rect x="116" y="159" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>) : (<>
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
        </>)
      }
    </div>
  );
}

export default Card;
