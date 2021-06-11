import React from 'react';
import logo from '../images/google.png';
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderImg>
        <Image src={logo} alt='vikings' />
        <Headerh1>
          This is the Final Update 🚀
      </Headerh1>
        <Headerh3>
          Attend The Wrap-Up Session Today @3:30 PM IST For The Next Steps
          <br />
          <br />
        </Headerh3>
        <Contdiv>
          <center>
          <Resiframe src="https://www.youtube.com/embed/71hvFef5Y-I" >
        </Resiframe>
        </center>
        </Contdiv>
        {/* width="560" height="315"  */}
      </HeaderImg>

    </>
  )
}

const HeaderImg = styled.header`
  height: 300px;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) and (max-width: 768px) {
    height: 120px;
  }
  @media (max-width: 479px) {
    height: 100px;
  }
`;

const Contdiv = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const Resiframe = styled.iframe`
  position: absolute;
  top: 5%;
  left: 25%;
  width: 50%;
  height: 50%;
  border: none;
  @media (min-width: 480px) and (max-width: 768px) {
    
    top: 0;
    left: 10%;
    width: 80%;
    height: 80%;
  }
  @media (max-width: 479px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Headerh1 = styled.h1`
  @media (min-width: 480px) and (max-width: 768px) {
    height: 120px;
  }
  @media (max-width: 479px) {
    height: 100px;
  }
`;

const Headerh3 = styled.h3`
  @media (min-width: 480px) and (max-width: 768px) {
    height: 120px;
  }
  @media (max-width: 479px) {
    height: 50px;
  }
`;

const Image = styled.img`
   width: 400px;
   @media (min-width: 480px) and (max-width: 768px) {
    width: 120px;
  }
   @media (max-width: 479px) {
    width: 100px;
  }
`;
export default Header