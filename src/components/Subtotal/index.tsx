import React from 'react';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../../contexts/StateProvider';

import { Container, SubtotalGift } from './styles';

const Subtotal: React.FC = () => {
  const { products } = useStateValue();

  return (
    <Container>
      <CurrencyFormat 
        renderText={(value: string) => (
          <>
            <p>
              Subtotal ({products.basket.length} items):
              <strong>0</strong>
            </p>
            <SubtotalGift>
              <input type="checkbox"/>This order contains a gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        velue={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </Container>
  );
};

export default Subtotal;
