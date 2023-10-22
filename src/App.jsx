import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import Shop from './components/shop/Shop';
import Carts from './components/carts/Carts';
import About from './components/about/About';

function App() {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=12');
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClickButton = (e,id) => {
    e.preventDefault();
    const selectedItem = data.find((item) => item.id === id);

    if (selectedItem) {
      const inputElement = document.getElementById(`${id}`);
      const cartNumber = inputElement ? parseInt(inputElement.value, 10) : 1;

      setCartData((prevCartData) =>
        prevCartData.some((item) => item.id === id && item.addedToCart)
          ? [...prevCartData]
          : [
              ...prevCartData,
              { ...selectedItem, addedToCart: true, cartNumber: cartNumber || 1 },
            ]
      );
    }
  };

  const handleChange = (e) => {
    const productId = e.target.id;
    const cartNumber = e.target.value;

    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.id === productId ? { ...item, cartNumber: cartNumber } : item
      )
    );
  };


  const handleCloseButton = (e, id) => {
    e.preventDefault();
    const updatedCartData = cartData.filter((item) => item.id !== id);
    setCartData(updatedCartData);
  }

  const handleIncrement = (itemId) => {
    // Find the item in the cartData array
    const updatedCartData = cartData.map((item) => {
      if (item.id === itemId) {
        // Increment the cartNumber for the specific item
        return { ...item, cartNumber: item.cartNumber + 1 };
      }
      return item;
    });

    // Update the state with the new cart data
    setCartData(updatedCartData);
  };

  // const handleDecrement = (itemId) => {
  //   // Find the item in the cartData array
  //   const updatedCartData = cartData.map((item) => {
  //     if (item.id === itemId) {
  //       // Increment the cartNumber for the specific item
  //       return { ...item, cartNumber: item.cartNumber - 1 };
  //     }
  //     return item;
  //   });

  //   // Update the state with the new cart data
  //   setCartData(updatedCartData);
  // };

  return (
    <>
      <BrowserRouter>
        <div className="card">
          <Header totalCarts={cartData.length}/>
          <Routes>
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/shop"
              element={<Shop data={data} handleClickButton={handleClickButton} handleChange={handleChange} />}
            />
            <Route
              path="/carts"
              element={<Carts cartData={cartData} handleCloseButton={handleCloseButton} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
