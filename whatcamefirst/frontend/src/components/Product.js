import axios from 'axios';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock!');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="card">
      <Link to={`/product/${product.slug}`}>
        <img
          className="birdy-name card-img-top"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <div className="card-text-body">
          <Link to={`/product/${product.slug}`}>
            <Card.Title className="card-title">{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text className="card-description">
            {product.currency}
            {product.currentPrice}
          </Card.Text>
          {product.countInStock === 0 ? (
            <Button variant="secondary" disabled>
              Out of Stock
            </Button>
          ) : (
            <Button
              onClick={() => addToCartHandler(product)}
              variant="primary"
              className="btn btn-primary"
            >
              Add to cart
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default Product;
