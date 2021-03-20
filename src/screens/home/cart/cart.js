import React from 'react';
import icons from '../../../assets/icons';
import './cart.css';

const Cart = (props) => {
  const data = props.data || {};
  return (
    <div className="cart-container">
      <div className="padder">
        <div className="row">
          <div className="flex-1 column justify-center">
            <div className="font-18px bold">1 Item | Rp 20.000</div>
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