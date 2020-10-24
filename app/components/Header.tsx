import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  height: 80px;
  padding:20px;
  width:100%;
  background: #313131;
`;

function Header() {

  return (
      <>
          <HeaderStyle>
            header
          </HeaderStyle>
      </>
  );
}

export default Header;
