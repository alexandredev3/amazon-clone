import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  &:hover {
    opacity: .9;
  }

  transition: opacity 200ms;

  > img {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
  }
`;

export const HeaderSearch = styled.div`
  > input {
    height: 12px;
    padding: 18px;
    width: 100%;
  }

  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;


export const SearchIcon = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;
  height: 36.5px !important;
  width: 38px;
  background: #cd9042;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: #FFF;
`;

export const HeaderSpanLineOne = styled.span`
  font-size: 10px;
`;

export const HeaderSpanLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

export const HeaderOptionBasket = styled.div`
  &:hover {
    opacity: .9;
  }

  display: flex;
  align-items: center;
  color: #FFF;
  transition: opacity 200ms;
`;

export const HeaderOptionLineTwoBasketCount = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;


