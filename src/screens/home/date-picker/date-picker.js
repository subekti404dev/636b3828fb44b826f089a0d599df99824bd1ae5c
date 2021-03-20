import React from 'react';
import './date-picker.css';

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



const DatePicker = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="date-picker">
      {dates.map((d, index) => {
        const classNames = ["date", "pointer"];
        const isActive = index === activeIndex;
        isActive && classNames.push("date-active");
        return (
          <div
            key={index}
            className={classNames.join(" ")}
            onClick={() => setActiveIndex(index)}
          >
            <div className="font-12px">{d.day}</div>
            <div className="font-20px bold">{d.date}</div>
          </div>
        )
      })}
    </div>

  )
}

export default DatePicker;