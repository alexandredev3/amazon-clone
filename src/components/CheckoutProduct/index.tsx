import React from 'react';

import { useStateValue } from '../../contexts/StateProvider'; 

import { 
  Container ,
  CheckoutProductImage,
  CheckoutProductInfo,
  CheckoutProductTitle,
  CheckoutProductPrice,
  CheckoutProductRating
} from './styles';

export interface ProductTypes {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const CheckoutProduct: React.FC<ProductTypes> = ({ 
  id, image, title, price, rating 
}) => {
  const { dispatch } = useStateValue();

  function handleRemoveFromBasket() {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    })
  }

  return (
    <Container>
      <CheckoutProductImage>
        <img src={image} alt={title} />
      </CheckoutProductImage>

      <CheckoutProductInfo>
        <CheckoutProductTitle>
          {title}
        </CheckoutProductTitle>
        <CheckoutProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </CheckoutProductPrice>
        <CheckoutProductRating>
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
          ))}
        </CheckoutProductRating>

        <button onClick={handleRemoveFromBasket}>Remove from Basket</button>
      </CheckoutProductInfo>
    </Container>
  );
};

export default CheckoutProduct;
