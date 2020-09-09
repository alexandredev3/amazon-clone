import React from 'react';

import { Container, Banner, HomeRow } from './styles';

import Product from '../../components/Product';

export default function Home() {
  return (
    <Container>

      <Banner>
        <img 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </Banner>

      <HomeRow>
        <Product
          id={1}
          title="Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Cinza" 
          price={299.00}
          image="https://images-na.ssl-images-amazon.com/images/I/61166zKVmaL._AC_SL1000_.jpg"
          rating={5}
        />
        <Product
          id={2}
          title="Xiaomi Redmi Note 9 128GB 4GB RAM - Versão Global - Midnight Grey" 
          price={1.529}
          image="https://images-na.ssl-images-amazon.com/images/I/61VmUpCs7PL._AC_SL1000_.jpg"
          rating={4}
        />
      </HomeRow>

      <HomeRow>
        <Product 
          id={3}
          title="Notebook Vaio FE15, Intel Core i5, 8GB RAM, HD 1TB, Tela LCD 15.6 HD, Windows 10 - Chumbo Escuro" 
          price={3.999}
          image="https://images-na.ssl-images-amazon.com/images/I/61O073PTvrL._AC_SL1500_.jpg"
          rating={4}
        />
        <Product 
          id={4}
          title="Monitor LG 19.5'' LED HD - HDMI, 2ms, Ajuste de Inclinação, Reader Mode, 4-Screen Split, 20MK400H-B" 
          price={499.00}
          image="https://images-na.ssl-images-amazon.com/images/I/819C4audmiL._AC_SL1500_.jpg"
          rating={3}
        />
        <Product 
          id={5}
          title="Multifuncional Epson EcoTank L3150 - Tanque de Tinta Colorida, Wi-Fi Direct, USB, Bivolt" 
          price={1.209}
          image="https://images-na.ssl-images-amazon.com/images/I/61minrTDZmL._AC_SL1000_.jpg"
          rating={5}
        />
      </HomeRow>

      <HomeRow>
        <Product 
            id={6}
            title="Smart TV LED PRO 55'' Ultra HD 4K LG 55UM761, 4 HDMI, 2 USB Wi-fi Conversor Digital, Controle Smart Magic" 
            price={3.139}
            image="https://images-na.ssl-images-amazon.com/images/I/61pBK9XmMTL._AC_SL1000_.jpg"
            rating={5}
        />
      </HomeRow>

    </Container>
  );
}