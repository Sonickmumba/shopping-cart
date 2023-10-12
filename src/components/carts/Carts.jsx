import PropTypes from "prop-types";

const Carts = ({ cartData }) => {
  // const { carts } = props;

  // In Carts component
  console.log("cartData in Carts:", cartData);
  return (
    <div>
      {cartData && cartData.length > 0 ? (
        cartData.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  )
}

Carts.propTypes = {
  cartData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      addedToCart: PropTypes.bool.isRequired,
      cartNumber: PropTypes.number.isRequired,
      // Add other properties as needed
    })
  ),
};

export default Carts
