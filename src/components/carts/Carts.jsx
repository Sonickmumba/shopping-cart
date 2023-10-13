import PropTypes from "prop-types";
import React from "react";

const Carts = ({ cartData }) => {
  const totalItems = cartData ? cartData.reduce((acc, item) => acc + item.cartNumber, 0) : 0;

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
  <p className="text-xl font-semibold mb-4">Your Cart ({totalItems} items)</p>

  {cartData && cartData.length > 0 ? (
    <div>
      {cartData.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between mb-2">
          <p className="mb-2 sm:mb-0">{item.title} - Quantity: {item.cartNumber}</p>
          <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 sm:ml-2">Remove</button>
        </div>
      ))}
      <button onClick={() => handleProceedToPayment()} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 sm:mt-0">
        Proceed to Payment
      </button>
    </div>
  ) : (
    <p>Your cart is empty</p>
  )}
</div>

  );
};


Carts.propTypes = {
  cartData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // price: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      addedToCart: PropTypes.bool.isRequired,
      // cartNumber: PropTypes.string.isRequired,
      cartNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      // Add other properties as needed
    })
  ),
};

export default Carts
