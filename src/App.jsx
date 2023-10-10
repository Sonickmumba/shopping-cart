import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import Shop from './components/shop/Shop';
import Carts from './components/carts/Carts';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className="card">
        <Header />
        <MainPage />
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/home" element={<Carts />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
