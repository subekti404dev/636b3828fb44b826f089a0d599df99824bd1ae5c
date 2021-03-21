import React from 'react';
import icons from '../assets/icons'
import LocationModal from './location-modal';
import styled from 'styled-components';

const locations = [
  "Nasi Goreng Mafia",
  "Ayam Bang Dava",
  "Warung Steak",
  "Geprek Bensu",
  "Ngikan",
  "Nasi Bakar"
];

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 60px;
  flex-direction: row;
`

const Left = styled.div`
  display: flex;
  width: 60px;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding-left: 10px;
  margin-top: 5px;
`

const Label = styled.div`
  font-size: 12px;
`

const Location = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

const AlignCenter = styled.div`
  align-items: center;
`

const Icon = styled.img`
  width: ${props => props.width ? props.width : 0}px;
  cursor: ${props => props.pointer ? "pointer" : "auto"};
  -webkit-tap-highlight-color: transparent;
  margin-top:  ${props => props.marginTop ? props.marginTop : 0}px;
`

const Header = (props) => {
  const [isOpenLocationModal, setIsOpenLocationModal] = React.useState(false);
  const [location, setLocation] = React.useState(locations[0]);

  return (
    <Container>
      <Left>
        <Icon src={icons.back} width={35} pointer alt="back" />
      </Left>
      <Right>
        <Label>
          ALAMAT PENGANTARAN
        </Label>
        <Location onClick={() => setIsOpenLocationModal(true)}>
          <AlignCenter>{location}</AlignCenter>
          <AlignCenter>
            <Icon
              src={icons.arrowDown}
              width={30}
              marginTop={-2}
              alt="arrow-down"
            />
          </AlignCenter>
        </Location>
      </Right>
      <LocationModal
        isOpen={isOpenLocationModal}
        closeModal={() => setIsOpenLocationModal(false)}
        locations={locations}
        onChange={setLocation}
      />
    </Container>
  )
}

export default Header;