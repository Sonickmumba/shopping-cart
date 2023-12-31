import PropTypes from "prop-types";
const Shop = ( { data, handleChange, handleClickButton }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2">
      {/* {cartData && cartData.length > 0 ? (
        <Carts cartData={cartData} />
      ) : (
        <p>Your cart is empty</p>
      )} */}

      {data.map((item) => (
        <div
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={item.id || item.title}
        >
          <a href="#">
            <img
              className="p-4 max-h-90 object-cover w-full rounded-t-lg"
              src={`${item.image}`}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              {Array.from({ length: Math.min(item.rating.rate, 5) }).map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {item.rating.rate}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">${item.price}</span>
              <div>
                <input
                  type="number"
                  id={item.id}
                  min="1"
                  value={item.cartNumber}
                  onChange={(e) => handleChange(e,item.id)}
                  className="block w-10 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <a
                href="#"
                id={item.id}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => handleClickButton(e, item.id)}
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Shop.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
      }).isRequired,
      image: PropTypes.string.isRequired,
      cartNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickButton: PropTypes.func.isRequired,
  // cartData: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     title: PropTypes.string.isRequired,
  //     price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  //     category: PropTypes.string.isRequired,
  //     description: PropTypes.string.isRequired,
  //     image: PropTypes.string.isRequired,
  //     addedToCart: PropTypes.bool.isRequired,
  //     cartNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  //   })
  // ).isRequired,
};

export default Shop;



