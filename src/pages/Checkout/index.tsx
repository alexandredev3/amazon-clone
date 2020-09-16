import React from 'react';

import Subtotal from '../../components/Subtotal';
import CheckoutProduct, { ProductTypes } from '../../components/CheckoutProduct';
import Header from '../../components/Header';

import { useStateValue } from '../../contexts/StateProvider';

import { 
  Container, 
  CheckoutLeft,
  CheckoutAdd,
  CheckoutTitle,
  CheckoutRight,
} from './styles';

const Checkout: React.FC = () => {
  const { data } = useStateValue();

  return (
    <>
      <Header />

      <Container>
        <CheckoutLeft>
          <CheckoutAdd>
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

            <CheckoutTitle>
              <h2>Your shopping Basket</h2>
              {data.basket.map((product: ProductTypes) => {
                return (
                  <CheckoutProduct
                    id={product.id} 
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                  />
                );
              })}
            </CheckoutTitle>
          </CheckoutAdd>
        </CheckoutLeft>

        <CheckoutRight>
          <Subtotal />
        </CheckoutRight>
      </Container>
    </>
  );
};

export default Checkout;
