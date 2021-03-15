import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-action';

const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const CartIcon = () => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  const handlerToggle = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div>
      <CartIconStyled onClick={handlerToggle}>
        <ShoppingIcon style={{ style: '24px', height: '24px' }} />
        <ItemCount>{quantity}</ItemCount>
      </CartIconStyled>
    </div>
  );
};
