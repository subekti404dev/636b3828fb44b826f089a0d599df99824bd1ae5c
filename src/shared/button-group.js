import React from 'react'
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.isActive ? "#424749" : "#E4E4E4"};
  color: ${props => props.isActive ? "#FFF" : "#ABAFB1"};
  background-color: ${props => props.isActive ? "#424749" : "#FFF"};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  border-top-left-radius:  ${props => props.isFirst ? "4px" : "0px"};
  border-bottom-left-radius:  ${props => props.isFirst ? "4px" : "0px"};
  border-top-right-radius: ${props => props.isLast ? "4px" : "0px"};
  border-bottom-right-radius: ${props => props.isLast ? "4px" : "0px"};
  `

const BtnGroup = styled.div`
  padding: 8px 16px;
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 40px;
  `
  
const ButtonGroup = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(props.initialIndex || 0);
  const onChange = (index) => {
    setActiveIndex(index);
    if (props.onChange) props.onChange(index);
  }
  return (
    <BtnGroup>
      {(props.buttons || []).map((btn, index) => {
        const isActive = activeIndex === index;
        const isFirst = index === 0;
        const isLast = index === (props.buttons || []).length - 1;
        return (
          <Button
            key={index}
            isActive={isActive}
            isFirst={isFirst}
            isLast={isLast}
            onClick={() => onChange(index)}
          >
            {btn}
          </Button>
        )
      })}
    </BtnGroup>
  )
}

export default ButtonGroup;