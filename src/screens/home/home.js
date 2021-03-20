import React from 'react';
import './home.css';
import Header from './header/header';
import DatePicker from './date-picker/date-picker';
import ButtonGroup from './button-group/button-group';
import Content from './content/content';
import Cart from './cart/cart';

const Home = (props) => {
  const [activeSwitchIndex, selectedSwitchIndex] = React.useState(0);
  return (
    <div className="home">
      <Header />
      <DatePicker />
      <ButtonGroup
        buttons={["Launch", "Dinner"]}
        initialIndex={activeSwitchIndex}
        onChange={selectedSwitchIndex}
      />
      <Content />
      <Cart />
    </div>
  )
}

export default Home;