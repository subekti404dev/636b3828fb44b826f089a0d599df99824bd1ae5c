import React from 'react'
import styled from "styled-components";
import Modal from 'react-modal';
import icons from '../assets/icons';

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

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 12px 0 0;
`

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 0px 20px;
`

const Input = styled.input`
  margin: 10px 20px;
  height: 50px;
  display: flex;
  width: calc(100% - 90px);
  border-radius: 10px;
  border: 1px solid #dedede;
  padding-left: 50px;
  font-size: 20px;
  background-image: url("${icons.pointOrange}");
  background-repeat: no-repeat;
  background-size: 32px 32px;
  background-position: 4px 8px;
`

const Outlet = styled.div`
  font-size: 18px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
`

const OutletIconContainer = styled.div`
  background-color: #F1F1F2;
  padding: 5px;
  border-radius: 50px;
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const Icon = styled.img`
  width: ${props => props.width ? props.width : 0}px;
`

const OutletContainer = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 1px solid #dedede;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`

const LocationModal = ({ locations, isOpen, afterOpenModal, closeModal, onChange }) => {
  const [keyword, setKeyword] = React.useState("");
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <div>
        <CloseContainer>
          <Icon src={icons.close} alt="back" onClick={closeModal} width={35} />
        </CloseContainer>
        <Header>
          {"Cek makanan yang tersedia di lokasi kamu!"}
        </Header>
        <Input
          type="text"
          placeholder="Cari"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div>
          {(locations || [])
            .filter(loc => loc.toLowerCase().includes(keyword.toLowerCase()))
            .map((outlet, index) => {
              const onClick = () => {
                if (onChange) onChange(outlet);
                closeModal();
              }
              return (
                <Outlet
                  key={index}
                  onClick={onClick}>
                  <OutletIconContainer>
                    <Icon src={icons.pointGrey} alt="back" width={25} />
                  </OutletIconContainer>
                  <OutletContainer>
                    {outlet}
                  </OutletContainer>
                </Outlet>
              )
            })}
        </div>
      </div>

    </Modal>
  )
}

export default LocationModal;