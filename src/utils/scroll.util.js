import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export function useScroll(id) {
  const element = document.getElementById(id);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(element.getBoundingClientRect());
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = (e) => {
    setBodyOffset(element.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  };

  const delay = 200;

  useEffect(() => {
    element.addEventListener('scroll', debounce(listener, delay));
    return () => {
      element.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}