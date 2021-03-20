import React from 'react';
import './button-group.css';

const ButtonGroup = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(props.initialIndex || 0);
  const onChange = (index) => {
    setActiveIndex(index);
    if (props.onChange) props.onChange(index);
  }
  return (
    <div className="btn-group">
      <div className="btn">
        {(props.buttons || []).map((btn, index) => {
          const classNames = ["option", "pointer"];
          const isActive = activeIndex === index;
          const isFirst = index === 0;
          const isLast = index === (props.buttons || []).length - 1;
          isActive && classNames.push("option-active");
          isFirst && classNames.push("option-first");
          isLast && classNames.push("option-last");
          return (
            <div
              key={index}
              className={classNames.join(" ")}
              onClick={() => onChange(index)}
            >
              {btn}
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default ButtonGroup;