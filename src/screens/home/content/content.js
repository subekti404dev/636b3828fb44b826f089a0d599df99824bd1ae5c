import React from 'react';
import './content.css';
import icons from '../../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../../../redux/actions/cart.action';
import { idr } from '../../../utils/idr.util'
import RatingStar from '../../../shared/rating-star';
import { HIDE_MODE, SHOW_MODE } from '../../../redux/actions/mode.action';

const items = [
  {
    id: 0,
    name: 'Roasted Chicken with Scramble Egg',
    rating: 3.5,
    outlet: 'Uptown Launch',
    price: 35000,
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    id: 1,
    name: 'Sate Ayam',
    rating: 4,
    outlet: 'Uptown Launch',
    price: 35000,
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1561626423-a51b45aef0a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 2,
    name: 'Spaghetti',
    rating: 2,
    outlet: 'Uptown Launch',
    price: 35000,
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 3,
    name: 'Steak',
    rating: 4,
    outlet: 'Uptown Launch',
    price: 35000,
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
  {
    id: 4,
    name: 'Sushi',
    rating: 4,
    outlet: 'Uptown Launch',
    price: 35000,
    by: 'Kulina',
    photo: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  },
];

const Content = (props) => {
  const dispatch = useDispatch();
  const mode = useSelector(state => state.mode);
  const [lastPosition, setLastPosition] = React.useState(0)

  const listener = (_e) => {
    const element = document.getElementById("item-0");
    const position = (element.getBoundingClientRect()).top;

    if (position > lastPosition) {
      if (!mode.show) {
        dispatch({ type: SHOW_MODE })
      }
    }
    else {
      if (mode.show) {
        dispatch({ type: HIDE_MODE })
      }
    }
    setLastPosition(position);
  }

  React.useEffect(() => {
    const element = document.getElementById("content");
    element.addEventListener('scroll', listener);
    return () => {
      element.removeEventListener('scroll', listener);
    };
  });

  const style = {
    height: `calc(100% - ${mode.show ? 185 : 130}px)`
  };

  return (
    <div className="content" style={style} id="content">
      {items.map((item, index) => {
        const onAddToCart = () => {
          dispatch({ type: ADD_TO_CART, payload: item })
        }
        return (
          <div
            id={`item-${index}`}
            key={index}
            className="item shadow">
            <div className="img-container">
              <img alt={`p-${index}`} src={item.photo} className="item-img" />
            </div>
            <div className="description">
              <div className="rating font-14px row">
                <div className="rating-number">{item.rating}</div>
                <RatingStar value={item.rating} />
              </div>
              <div className="name font-16px bold">{item.name}</div>
              <div className="by font-12px">{`by ${item.by}. ${item.outlet}`}</div>
              <div className="row">
                <div className="flex-1 font-16px align-center">
                  <div className="price bold">{idr(item.price)}</div>
                </div>
                <div className="flex-1 justify-end align-center">
                  <div className="add-btn pointer" onClick={onAddToCart}>
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
      <div className="height-60px"></div>
    </div>
  )
}

export default Content;