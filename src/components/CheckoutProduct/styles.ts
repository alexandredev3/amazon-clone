import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CheckoutProductImage = styled.div`
  > img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
`;

export const CheckoutProductInfo = styled.div`
  padding-left: 20px;

  > button {
    cursor: pointer;
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    transition: opacity 200ms;

    &:hover {
      opacity: .9;
    }
  }
`;

export const CheckoutProductTitle = styled.div`
  font-size: 17px;
  font-weight: 800;
`;

export const CheckoutProductPrice = styled.div`

`;

export const CheckoutProductRating = styled.div`
  display: flex;
`;

