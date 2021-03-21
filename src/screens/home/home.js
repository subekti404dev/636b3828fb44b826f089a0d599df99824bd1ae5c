import React from 'react';
import './home.css';
import Content from './content/content';
import ButtonGroup from '../../shared/button-group';
import DatePicker from '../../shared/date-picker';
import Cart from '../../shared/cart';
import Header from '../../shared/header';

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