import React from 'react';

import Subtotal from '../../components/Subtotal';

import { 
  Container, 
  CheckoutLeft,
  CheckoutAdd,
  CheckoutTitle,
  CheckoutRight,
} from './styles';

const Checkout: React.FC = () => {
  return (
    <Container>
      <CheckoutLeft>
        <CheckoutAdd>
          <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

          <CheckoutTitle>
            <h2>Your shopping Basket</h2>

            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
          </CheckoutTitle>
        </CheckoutAdd>
      </CheckoutLeft>

      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </Container>
  );
};

export default Checkout;
