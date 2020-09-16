import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../../contexts/StateProvider';

import { Container, SubtotalGift } from './styles';

const Subtotal: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const { data } = useStateValue();

  /**
   * here we could create a function inside the file "redutores.ts", 
   * but it will give some typing errors, so I thought it better to do it this way.
   */
  useEffect(() => {
    const { basket } = data;

    const total = basket?.reduce((amount: number, item: { 
      price: number;
    }) => item.price + amount, 0);
    /**
     * amount e a quatidade inicial.
     * item e o produto.
     * o zero no final e o amount que e o valor inicial.
     */

    setTotalPrice(total);
  }, [data]);

  return (
    <Container>
      <CurrencyFormat 
        renderText={(value: string) => (
          <>
            <p>
              Subtotal ({data.count} items):
              <strong> {value}</strong>
            </p>
            <SubtotalGift>
              <input type="checkbox"/>This order contains a gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </Container>
  );
};

export default Subtotal;
