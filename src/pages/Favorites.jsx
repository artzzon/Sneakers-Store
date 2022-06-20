import React from "react";
import Card from "../components/Card";

function Favorites({ favoritesList, onAddToCart, onAddToFavorites }) {
  return (
    <div className="mainContent">
      <div className="headBlock">
        <h1>Мои закладки</h1>
      </div>
      <div className="catalog">
        {favoritesList
          .map((prod) => (
            <Card
              id={prod.id}
              title={prod.title}
              price={prod.price}
              imgUrl={prod.imgUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorites(obj)}
              favorited={true}
            />
          ))}
      </div>
    </div>
  );
};
//
export default Favorites;