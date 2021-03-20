import React from 'react';
import './content.css';
import icons from '../../../assets/icons';

const items = [
  {
    id: 0,
    name: 'Roasted Chicken with Scramble Egg',
    rating: 3.5,
    outlet: 'Uptown Launch',
    price: 'Rp 35.000',
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id: 1,
    name: 'Roasted Chicken with Scramble Egg',
    rating: 4,
    outlet: 'Uptown Launch',
    price: 'Rp 35.000',
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id: 2,
    name: 'Roasted Chicken with Scramble Egg',
    rating: 2,
    outlet: 'Uptown Launch',
    price: 'Rp 35.000',
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id: 1,
    name: 'Roasted Chicken with Scramble Egg',
    rating: 4,
    outlet: 'Uptown Launch',
    price: 'Rp 35.000',
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id: 5,
    name: 'Roasted Chicken with Scramble Egg',
    rating: 4,
    outlet: 'Uptown Launch',
    price: 'Rp 35.000',
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
];

const Content = (props) => {
  return (
    <div className="content">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="item shadow">
            <div className="img-container">
              <img alt={`p-${index}`} src={item.photo} className="item-img" />
            </div>
            <div className="description">
              <div className="rating font-14px row">
                <div className="rating-number">{item.rating}</div>
                <RatingStar rate={item.rating} />
              </div>
              <div className="name font-16px bold">{item.name}</div>
              <div className="by font-12px">{`by ${item.by}. ${item.outlet}`}</div>
              <div className="row">
                <div className="flex-1 font-16px align-center">
                  <div className="price bold">{item.price}</div>
                </div>
                <div className="flex-1 justify-end align-center">
                  <div className="add-btn pointer">
                    <div>{'ADD'}</div>
                    <img
                      src={icons.plus}
                      className="icon-plus"
                      alt="arrow-down"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="height-30px"></div>
    </div>
  )
}

export default Content;

const RatingStar = ({ rate }) => {
  const starQty = Math.floor(rate);
  const hasStartHalf = (rate - starQty) > 0;
  const stars = []
  for (let i = 0; i < starQty; i++) {
    stars.push(<img key={i} src={icons.star} alt={"star"} className="icon-star" />)
  }
  if (hasStartHalf) {
    stars.push(<img key={"half"} src={icons.startHalf} alt={"star"} className="icon-star" />)
  }
  return (
    <div className="rating-star">
      {stars}
    </div>
  )
}