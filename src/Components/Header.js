import React from 'react';
import logo from '../images/google.png';
import styled from "styled-components";
 
const Header = () => {
  return (
    <HeaderImg>
      <Image src={logo} alt='vikings' />
      <Headerh5>
        Scores are not updated live. They're typically updated once daily.
        Scores were last updated at roughly 10:00 AM IST on May 27th.
      </Headerh5>
    </HeaderImg>
  )
}

const HeaderImg = styled.header`
  height: 300px;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) and (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 479px) {
    height: 100px;
  }
`;

const Headerh5 = styled.h5`
  @media (min-width: 480px) and (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 479px) {
    height: 100px;
  }
`;

const Image = styled.img`
   width: 400px;
   @media (min-width: 480px) and (max-width: 768px) {
    width: 200px;
  }
   @media (max-width: 479px) {
    width: 100px;
  }
`;
export default Header