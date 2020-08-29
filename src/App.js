import React, {  Fragment, useState } from 'react';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import PopupMarker from './components/popupMarker';
import SideBar from "./components/sidebar";
import SearchBar from './components/serachBar';
import ModalGS from './components/modalGS'
import ModalFilterGS from './components/modalFilterGS'
import ModalAddGS from './components/modalAddGS'
import { getStations } from './services/GasStations';
import './App.css';
import "./css/sidebar.css";
import './css/customizedRatings.css';
import 'leaflet/dist/leaflet.css';
import './css/popup.css';
import './css/modal.css';
import './css/searchBar.css';
import './index.css';

function App() {
  const zoom = 9;
  const gasStations = getStations();
  const mapCenter = {
    lat: 32.011261,
    lng: 34.774811,
  };
  const icons = require.context('./assets', true);
  const position = [mapCenter.lat, mapCenter.lng];
  const [show, setShow] = useState(false);
  const [showModalFilterGS, setShowModalFilterGS] = useState(false);
  const [showModalAddGS, setShowModalAddGS] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  return(
    <Fragment>
      
      <SideBar isOpenMenu = {isOpenMenu} 
      setIsOpenMenu = {setIsOpenMenu}
      setShow = {setShow}
      setShowModalFilterGS={setShowModalFilterGS} 
      setShowModalAddGS={setShowModalAddGS}
      />
      <SearchBar/>
      <Map className= "map" center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {gasStations.map(marker => {
          const icon = L.icon({
            iconUrl: icons('./' + marker.icon +'.png'),
            iconSize:     [30, 30],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
          });

          return (
            <Marker key={marker.id} position={marker.xy} icon = {icon}>
            <Popup>
              <PopupMarker title = {marker.name} address = {marker.Address} fuelPrice= {marker.fuelPrice} adBlue = {marker.adBlue} ></PopupMarker>  
            </Popup>
          </Marker>
          );
        })}
      </Map>
      <ModalGS show = {show} onHide = {setShow}></ModalGS>
      <ModalFilterGS show = {showModalFilterGS} onHide = {setShowModalFilterGS}></ModalFilterGS>
      <ModalAddGS show = {showModalAddGS} onHide = {setShowModalAddGS}></ModalAddGS>
    </Fragment>
  );
}

export default App;
