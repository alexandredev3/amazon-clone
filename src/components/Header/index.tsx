import React from 'react';
import { MdSearch, MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../contexts/StateProvider';

import { 
  Container,
  Logo,
  HeaderSearch,
  HeaderNav,
  HeaderSpanLineOne,
  HeaderOption,
  HeaderSpanLineTwo,
  SearchIcon,
  HeaderOptionBasket,
  HeaderOptionLineTwoBasketCount
} from './styles';

const Header: React.FC = () => {
  const { products } = useStateValue();

  return (
    <Container>
      
      <Link to="/">
        <Logo>
          <img 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon" 
          />
        </Logo>
      </Link>

      <HeaderSearch>
          <input 
            type="text"
          />
        <SearchIcon>
          <MdSearch size={24} />
        </SearchIcon>
      </HeaderSearch>

      <HeaderNav>

        <HeaderOption>
          
          <HeaderSpanLineOne>
            Hello Guest
          </HeaderSpanLineOne>
          
          <HeaderSpanLineTwo>
            Sign In
          </HeaderSpanLineTwo>

        </HeaderOption>

        <HeaderOption>

          <HeaderSpanLineOne>
              Returns
          </HeaderSpanLineOne>
            
          <HeaderSpanLineTwo>
              & Orders
          </HeaderSpanLineTwo>

        </HeaderOption>
        
        <HeaderOption>

          <HeaderSpanLineOne>
              Your
          </HeaderSpanLineOne>
            
          <HeaderSpanLineTwo>
              Prime
          </HeaderSpanLineTwo>

        </HeaderOption>

        <Link to="/checkout">
          <HeaderOptionBasket>
            <MdShoppingBasket color="#FFF" size={28} />
            <HeaderOptionLineTwoBasketCount>
              {products.basket?.length}
            </HeaderOptionLineTwoBasketCount>

          </HeaderOptionBasket>
        </Link>

      </HeaderNav>
    </Container>
  );
};

export default Header;
