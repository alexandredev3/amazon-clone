import React from 'react';

import { useStateValue } from '../../contexts/StateProvider';

import { 
  Container,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductRating
} from './styles';

interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product: React.FC<Props> = ({ id, title, image, price, rating }) => {
  const { dispatch } = useStateValue();

  if (rating > 5) {
    rating = 5
  };

  function handleAddToBasket() {
    // dispatch(colocar) o produto dentro da cesta.
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <Container>
      <ProductInfo>
        <ProductTitle>
          <p>{title}</p>
        </ProductTitle>

        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>

        <ProductRating>
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <span 
                aria-label="jsx-a11y/accessible-emoji"
                role="img"
                key={i}
              >
                🌟️
              </span>
            ))
          }
        </ProductRating>
      </ProductInfo>

      <img 
          src={image} 
          alt={title}
      />

      <button onClick={handleAddToBasket}>Add to Basket</button>

    </Container>
  );
};

export default Product;
