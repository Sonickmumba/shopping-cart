import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Carts = ({ cartData, handleCloseButton, handleIncrement, handleDecrement}) => {
  // const totalItems = cartData ? cartData.reduce((acc, item) => acc + item.cartNumber, 0) : 0;
  const totalCost = cartData
    ? cartData.reduce((cost, item) => cost + item.price * item.cartNumber, 0)
    : 0;

  return (
    <div className="h-screen bg-gray-300">
      <div className="py-12">
        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-3 gap-2 ">
                <div className="col-span-2 p-5">
                  {cartData.length === 0 ? (<h1>Your cart is empty!</h1>) : (
                    <>
                      <h1 className="text-xl font-medium ">Shopping Cart</h1>
                      {cartData.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center mt-6 pt-6 border-t"
                        >
                          <div className="flex  items-center">
                            <img
                              src={`${item.image}`}
                              width="60"
                              className="rounded-full "
                            />
                            <div className="flex flex-col ml-3">
                              <span className="md:text-md font-medium">
                                {item.title}
                              </span>
                              <span className="text-xs font-light text-gray-400">
                                #41551
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className="pr-8 flex ">
                              <span className="font-semibold" onClick={() => handleDecrement(item.id)}>-</span>
                              <input
                                type="text"
                                className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                                value={item.cartNumber}
                                readOnly
                              />
                              <span className="font-semibold" onClick={() => handleIncrement(item.id)}>+</span>
                            </div>
                            <div className="pr-8 ">
                              <span className="text-xs font-medium">
                              ${ (item.price * item.cartNumber).toFixed(2) }
                              </span>
                            </div>
                            {/* onClick={() => handleRemoveFromCart(item.id)} */}
                            <div>
                              <button type="button" onClick={(e) => handleCloseButton(e, item.id)}><i className="fa fa-close text-xs font-medium"></i></button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                      <i className="fa fa-arrow-left text-sm pr-2"></i>
                      <Link to="/shop">
                        <span className="text-md  font-medium text-blue-500">
                          Continue Shopping
                        </span>
                      </Link>
                    </div>
                    <div className="flex justify-center items-end">
                      <span className="text-sm font-medium text-gray-400 mr-1">
                        Subtotal:
                      </span>
                      <span className="text-lg font-bold text-gray-800 ">
                        {" "}
                        ${totalCost.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" p-5 bg-gray-800 rounded overflow-visible">
                  <span className="text-xl font-medium text-gray-100 block pb-3">
                    Card Details
                  </span>
                  <span className="text-xs text-gray-400 ">Card Type</span>
                  <div className="overflow-visible flex justify-between items-center mt-2">
                    <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
                      <span className="italic text-lg font-medium text-gray-200 underline">
                        VISA
                      </span>
                      <div className="flex justify-between items-center pt-4 ">
                        <span className="text-xs text-gray-200 font-medium">
                          ****
                        </span>
                        <span className="text-xs text-gray-200 font-medium">
                          ****
                        </span>
                        <span className="text-xs text-gray-200 font-medium">
                          ****
                        </span>
                        <span className="text-xs text-gray-200 font-medium">
                          ****
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs  text-gray-200">
                          Sonick Mumba
                        </span>
                        <span className="text-xs  text-gray-200">12/28</span>
                      </div>
                    </div>
                    <div className="flex justify-center  items-center flex-col">
                      <img
                        src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
                        width="40"
                        className="relative right-5"
                      />
                      <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">
                        mastercard.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center flex-col pt-3">
                    <label className="text-xs text-gray-400 ">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      placeholder="Sonick Mumba"
                    />
                  </div>
                  <div className="flex justify-center flex-col pt-3">
                    <label className="text-xs text-gray-400 ">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      placeholder="****     ****      ****     ****"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                    <div className="col-span-2 ">
                      <label className="text-xs text-gray-400">
                        Expiration Date
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="mm"
                        />
                        <input
                          type="text"
                          className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="yyyy"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label className="text-xs text-gray-400">CVV</label>
                      <input
                        type="text"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="XXX"
                      />
                    </div>
                  </div>
                  <button
                    className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
                    // onClick={() => handleProceedToPayment()}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Carts.propTypes = {
  cartData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
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
  handleCloseButton: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default Carts;
