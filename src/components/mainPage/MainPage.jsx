import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
    <div className="main-page mx-20 w-3/4 mr-auto ml-auto h-60 bg-[#cffafe] p-8 rounded-lg">
      <p className="text-center m-5 font-bold text-5xl">
        Welcome to our online shopping mall
      </p>
    </div>
    <div className="button-div  w-1/5 mr-auto ml-auto mt-20">
      <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <Link to="/shop"><span className="relative">Lets go shopping</span></Link>
      </a>
    </div>
    </>
  )
}

export default MainPage
