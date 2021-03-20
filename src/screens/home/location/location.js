import React from 'react'
import './location.css';
import Modal from 'react-modal';
import icons from '../../../assets/icons';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    bottom: '0px',
    right: '0px',
    left: '0px',
    top: '200px',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    padding: '0px'
  }
};


const LocationModal = ({ locations, isOpen, afterOpenModal, closeModal, onChange }) => {
  const [keyword, setKeyword] = React.useState("");
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="location">
        <div className="close-container">
          <img src={icons.close} className="icon-close pointer" alt="back" onClick={closeModal} />
        </div>
        <div className="font-24px bold padder-20">
          {"Cek makanan yang tersedia di lokasi kamu!"}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Cari"
            className="input font-20px"
            style={{
              backgroundImage: `url(${icons.pointOrange})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '32px 32px',
              backgroundPosition: '4px 8px'
            }}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div>
          {(locations || [])
            .filter(loc => loc.toLowerCase().includes(keyword.toLowerCase()))
            .map((city, index) => {
              const onClick = () => {
                if (onChange) onChange(city);
                closeModal();
              }
              return (
                <div
                  key={index}
                  onClick={onClick}
                  className="font-18px city-item">
                  <div className="city-icon-container">
                    <img src={icons.pointGrey} className="icon-point pointer" alt="back" />
                  </div>
                  <div className="city-name flex-1">{city}</div>
                </div>
              )
            })}
        </div>
      </div>

    </Modal>
  )
}

export default LocationModal;