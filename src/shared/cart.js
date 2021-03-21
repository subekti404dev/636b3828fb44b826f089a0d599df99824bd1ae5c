import React from 'react'
import styled from "styled-components";
import _ from 'lodash';
import { useSelector } from 'react-redux';
import icons from '../assets/icons';
import { idr } from '../utils/idr.util';

const CartContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #9f342f;
  width: calc(100% - 36px);
  margin: 10px;
  height: 40px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: ${props => props.visible ? 'block' : 'none'};
  padding: 8px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Left = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: center;
`

const LeftOne = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const LeftTwo = styled.div`
  font-size: 16px;
`

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

const Img = styled.img`
  width: ${props => props.width ? props.width : 0}px;
  height: ${props => props.height ? props.height : 0}px;
`

const Cart = (props) => {
  const {items} = useSelector(state => state.cart);
  const total = _.sumBy(items, 'price');
  const visible = items.length > 0;
  return (
    <CartContainer visible={visible}>
      <Row>
        <Left>
          <LeftOne>{`${items.length} Item | ${idr(total)}`}</LeftOne>
          <LeftTwo>{`Termasuk ongkos kirim`}</LeftTwo>
        </Left>
        <Right>
          <Img src={icons.cart} width={28} height={30} />
          <Img src={icons.arrowRight} width={25} height={25} />
        </Right>
      </Row>
    </CartContainer>
  )
}

export default Cart