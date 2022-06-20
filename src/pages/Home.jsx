import React from "react";

import Card from "../components/Card";
//
function Home({ items, cartItems, searchItem, onChangeSearchInput, setSearchItem, onAddToCart, onAddToFavorites, isLoading }) {

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    console.log(cartItems)

    return (isLoading ? [...Array(10)] : filteredItems).map((prod) => (
      <Card
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorites(obj)}
        isAdded={cartItems.some(obj => obj.id === prod.id)}
        isLoaded={isLoading}
        {...prod}
      />
    ))
  }

  return (
    <div className="mainContent">
      <div className="headBlock">
        <h1>{searchItem ? `Поиск: "${searchItem}"` : "Все кроссовки"}</h1>
        <div className="search">
          <img src="img/search.svg" alt="Поиск" />
          <input
            onChange={onChangeSearchInput}
            value={searchItem}
            placeholder="Поиск..."
          />
          {searchItem && (
            <img
              onClick={() => setSearchItem("")}
              className="clearSearch"
              src="img/cart-remove.svg"
              alt="Очистить строку поиска"
            />
          )}
        </div>
      </div>
      <div className="catalog">
        {renderItems()}
      </div>
    </div>
  );
};

export default Home;