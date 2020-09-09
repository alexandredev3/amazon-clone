import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;

  /* Vai deixar a imagem com um Fade. */
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const HomeRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px; 
`;