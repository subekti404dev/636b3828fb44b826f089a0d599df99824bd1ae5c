import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import icons from '../../../assets/icons';
import './cart.css';
import { idr } from '../../../utils/idr.util';

const Cart = (props) => {
  const {items} = useSelector(state => state.cart);
  const total = _.sumBy(items, 'price');
  return (
    <div className="cart-container">
      <div className="padder">
        <div className="row">
          <div className="flex-1 column justify-center">
            <div className="font-18px bold">{`${items.length} Item | ${idr(total)}`}</div>
            <div className="font-16px">Termasuk ongkos kirim</div>
          </div>
          <div className="flex-1 justify-end align-center">
            <img src={icons.cart} className={"icon-cart"} alt={"icon-cart"}/>
            <img src={icons.arrowRight} className={"icon-arrow-right"} alt={"icon-arrow-right"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;