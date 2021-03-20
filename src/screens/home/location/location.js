import React from 'react'
import './location.css';
import Modal from 'react-modal';
import icons from '../../../assets/icons';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%'
  }
};


const LocationModal = ({ locations, isOpen, afterOpenModal, closeModal, onChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="location">
        <div className="location-header shadow">
          <div className="left">
            <img src={icons.back} className="icon-back pointer" alt="back" onClick={closeModal} />
          </div>
          <div className="right">
            <div className="font-20px bold">
              PILIH KOTA
            </div>

          </div>
        </div>
        <div>
          {(locations || []).map((city, index) => {
            const onClick = () => {
              if (onChange) onChange(city);
              closeModal();
            }
            return <div key={index} onClick={onClick} className="font-18px city">{city}</div>
          })}
        </div>
      </div>

    </Modal>
  )
}

export default LocationModal;