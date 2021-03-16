import React from 'react';
import styled from 'styled-components';
import imgLogo from '../../assets/logo.svg';
import { CartIcon } from '../Cart/CartIcon';
import { Link } from 'react-router-dom';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
  top: 0;
`;

const Logo = styled.img`
  max-width: 100px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  margin: 16px 12px;
`;

const NaviagationMenu = styled.nav`
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  padding: 15px;
  align-self: flex-end;
  margin: 0 12px;
  filter: grayscale(0.3);
  &:hover {
    filter: grayscale(0);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Navbar = () => {
  return (
    <>
      <NavbarStyled>
        <Link to='/'>
          <Logo src={imgLogo} />
        </Link>
        <NaviagationMenu>
          <CartIcon />
        </NaviagationMenu>
      </NavbarStyled>
    </>
  );
};
