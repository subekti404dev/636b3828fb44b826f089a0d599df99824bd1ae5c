import React from 'react'
import styled from "styled-components";

const dates = [
  { date: 1, day: 'SAB' },
  { date: 2, day: 'MIN' },
  { date: 3, day: 'SEN' },
  { date: 4, day: 'SEL' },
  { date: 5, day: 'RAB' },
  { date: 6, day: 'KAM' },
  { date: 7, day: 'JUM' },
  { date: 8, day: 'SAB' },
  { date: 9, day: 'MIN' },
  { date: 10, day: 'SEN' },
  { date: 11, day: 'SEL' },
  { date: 12, day: 'RAB' },
  { date: 13, day: 'KAM' },
  { date: 14, day: 'JUM' },
  { date: 15, day: 'SAB' },
  { date: 16, day: 'MIN' },
  { date: 17, day: 'SEN' },
  { date: 18, day: 'SEL' },
  { date: 19, day: 'RAB' },
  { date: 20, day: 'KAM' },
  { date: 21, day: 'JUM' },
  { date: 22, day: 'SAB' },
  { date: 23, day: 'MIN' },
  { date: 24, day: 'SEN' },
  { date: 25, day: 'SEL' },
  { date: 26, day: 'RAB' },
  { date: 27, day: 'KAM' },
  { date: 28, day: 'JUM' },
  { date: 29, day: 'SAB' },
  { date: 30, day: 'MIN' },
];

const DateContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  min-width: 55px;
  margin-right: 4px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background-color: ${props => props.isActive ? "#424749" : "#FFF"};
  color: ${props => props.isActive ? "#FFF" : props.disabled ? "#D9DCE0" : "#424749"};
  border-radius: ${props => props.isActive ? "30px" : "0px"};
`

const Day = styled.div`
  font-size: 12px;
`

const Date = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const DatePickerContainer = styled.div`
  height: 60px;
  border-bottom: 1px solid #dedede;
  display: flex;
  padding-bottom: 4px;
  overflow-x: scroll;
  padding: 4px;
`

const DatePicker = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(2);
  return (
    <DatePickerContainer>
      {dates.map((d, index) => {
        const isActive = index === activeIndex;
        const isDisabled = d.day === 'SAB' || d.day === 'MIN';
        return (
          <DateContainer
            key={index}
            disabled={isDisabled}
            isActive={isActive}
            onClick={() => {
              if (!isDisabled) setActiveIndex(index)
            }}
          >
            <Day>{d.day}</Day>
            <Date>{d.date}</Date>
          </DateContainer>
        )
      })}
    </DatePickerContainer>
  )
}

export default DatePicker;