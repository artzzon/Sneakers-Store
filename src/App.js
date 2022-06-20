import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchItem, setSearchItem] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get("https://629f604f461f8173e4e81486.mockapi.io/catalog");
      const cartResponse = await axios.get("https://629f604f461f8173e4e81486.mockapi.io/cart");
      const favoritesResponse = await axios.get("https://629f604f461f8173e4e81486.mockapi.io/favorites");

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData()
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchItem(event.target.value);
  };

  const onAddToCart = async (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      const currentItem = cartItems.find(item => item.id === obj.id);
      const mockId = currentItem.mockId;
      axios.delete(`https://629f604f461f8173e4e81486.mockapi.io/cart/${mockId}`);
      setCartItems(prev => prev.filter(item => item.id !== obj.id));
    } else {
      const { data } = await axios.post("https://629f604f461f8173e4e81486.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, data]);
    }
  };

  const onRemoveItem = (id, mockId) => {
    axios.delete(`https://629f604f461f8173e4e81486.mockapi.io/cart/${mockId}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find(item => item.id === obj.id)) {
        const currentItem = favorites.find(item => item.id === obj.id);
        const mockId = currentItem.mockId;
        axios.delete(`https://629f604f461f8173e4e81486.mockapi.io/favorites/${mockId}`);;
        //setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post("https://629f604f461f8173e4e81486.mockapi.io/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Ошибка при добавлении в Избранное!');
    }
  };

  return (
    <div className="wrapper">
      {cartOpen && (
        <Cart
          items={cartItems}
          onClickCloseCart={setCartOpen}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={setCartOpen} />
      <Routes>
        <Route exact path="/" element={
          <Home
            items={items}
            cartItems={cartItems}
            searchItem={searchItem}
            onChangeSearchInput={onChangeSearchInput}
            setSearchItem={setSearchItem}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites} />
        } >
        </Route>

        <Route
          exact
          path="/favorites"
          element={
            <Favorites
              favoritesList={favorites}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites} />} />
      </Routes>
    </div>
  );
}

export default App;
