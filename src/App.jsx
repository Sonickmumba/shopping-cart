import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import Shop from './components/shop/Shop';
import Carts from './components/carts/Carts';
import About from './components/about/About';

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//       <div className="card">
//         <Header />
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/carts" element={<Carts />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//     </>
//   )
// }

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

  const handleClickButton = (id) => {
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

  return (
    <>
      <BrowserRouter>
        <div className="card">
          <Header />
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
              element={<Carts cartData={cartData} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


// export default App
