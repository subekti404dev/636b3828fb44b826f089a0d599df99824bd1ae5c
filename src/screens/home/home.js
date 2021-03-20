import React from 'react';
import './home.css';
import Header from './header/header';
import DatePicker from './date-picker/date-picker';

const Home = (props) => {
  return (
    <div className="home">
      <Header />
      <DatePicker />
    </div>
  )
}

export default Home;