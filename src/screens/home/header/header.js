import React from 'react';
import './header.css';
import icons from '../../../assets/icons'
import LocationModal from '../location/location';

const locations = [
  "Jakarta",
  "Bandung",
  "Semarang",
  "Yogyakarta",
  "Surabaya",
  "Bali"
];

const Header = (props) => {
  const [isOpenLocationModal, setIsOpenLocationModal] = React.useState(false);
  const [location, setLocation] = React.useState(locations[0]);
  
  return (
    <div className="header">
      <div className="left">
        <img src={icons.back} className="icon-back pointer" alt="back" />
      </div>
      <div className="right">
        <div className="font-12px label">
          ALAMAT PENGANTARAN
        </div>
        <div className="font-20px bold row pointer" onClick={() => setIsOpenLocationModal(true)}>
          <div className={"align-center"}>{location}</div>
          <div className={"align-center"}>
            <img
              src={icons.arrowDown}
              className="icon-arrow-down"
              alt="arrow-down"
            />
          </div>
        </div>
      </div>
      <LocationModal
        isOpen={isOpenLocationModal}
        closeModal={() => setIsOpenLocationModal(false)}
        locations={locations}
        onChange={setLocation}
      />
    </div>
  )
}

export default Header;