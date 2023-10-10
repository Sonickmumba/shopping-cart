import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import Shop from './components/shop/Shop';
import Carts from './components/carts/Carts';
import About from './components/about/About';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="card">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
