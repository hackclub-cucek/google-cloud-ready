import React from 'react';
import logo from '../images/google.png';
import styled from "styled-components";
 
const Header = () => {
  return (
    <HeaderImg>
      <Image src={logo} alt='vikings' />
      <Headerh1>
      This is the Final Update 🚀 
      </Headerh1>
      <Headerh3>
      Attend The Wrap-Up Session Today @3:30 PM IST For The Next Steps
      <a href="https://youtu.be/71hvFef5Y-I">
      <button>
       Click here
      </button>
      </a>
      </Headerh3>
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

const Headerh1 = styled.h1`
  @media (min-width: 480px) and (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 479px) {
    height: 100px;
  }
`;

const Headerh3 = styled.h3`
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