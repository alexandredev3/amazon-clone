import React from 'react';
import { MdSearch, MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../contexts/StateProvider';
import { auth } from '../../services/firebase';

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
  const { data } = useStateValue();

  const email = data.user?.email;

  async function handleAuthentication() {
    if (data.user) {
      await auth.signOut();
    }
  }

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
            {email ? `Hello ${email}` : 'Hello Guests'}
          </HeaderSpanLineOne>
          
            <HeaderSpanLineTwo onClick={handleAuthentication}>
              {/* So vai redirecionar para a pagina de login, se o usuario não estiver logado */}
              <Link to={data.user ? "/" : "/login"}>
                {data.user ? 'Sign Out' : 'Sign In'}
              </Link>
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
              {data.count}
            </HeaderOptionLineTwoBasketCount>

          </HeaderOptionBasket>
        </Link>

      </HeaderNav>
    </Container>
  );
};

export default Header;
