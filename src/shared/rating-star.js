import React from 'react'
import styled from "styled-components";
import icons from '../assets/icons';

const Icon = styled.img`
  width: 20px;
`
const Star = () => <Icon src={icons.star} alt={"star"} />
const HalfStar = () => <Icon src={icons.startHalf} alt={"-halfstar"} />
const Container = styled.div`
  margin: 0px 5px;
`
const RatingStar = ({ value }) => {
  const starQty = Math.floor(value);
  const hasStartHalf = (value - starQty) > 0;
  const stars = []
  for (let i = 0; i < starQty; i++) {
    stars.push(<Star />)
  }
  if (hasStartHalf) {
    stars.push(<HalfStar />)
  }
  return (
    <Container>
      {stars}
    </Container>
  )
}

export default RatingStar;