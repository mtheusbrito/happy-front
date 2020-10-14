import React from 'react';
import mapMarker from './../images/marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import './../styles/pages/orphanages-maps.css';
import { Map, TileLayer } from "react-leaflet"; 
import  "leaflet/dist/leaflet.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criancas estao esperando a sua visita :) </p>
        </header>
        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>

      </aside>

      <Map 
        center={[-21.1884434, -41.9097135]}
        zoom={15}
        style={{width: '100%', height: '100%' }}
        >
        <TileLayer  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={52} color="#FFF" />
      </Link>
    </div>
  )
}
export default OrphanagesMap;