import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav-container flex justify-between mx-aut p-4">
      <div className="div-header-icon flex items-center w-30">
        <Link to="/"><span className="material-symbols-outlined mr-3">home</span></Link>
        <button type="button">About</button>
      </div>
      <div className="shop-div flex">
        <Link to="/shop"><button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Shop</button></Link>
        <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Your Carts <span className="inline-flex items-center justify-center w-5 h-4 p-2 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">20</span></button>
      </div>
    </nav>
  )
}

export default Header
