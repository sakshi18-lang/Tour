import React from "react";
import '.././App.css';
import {Button } from 'react-bootstrap';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import {Link}from 'react-router-dom';

export default function AutoComplete() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div>
     <div className="query-cont">
       We have a function send us query and a button.
       <br></br>
       <Button className="query"><Link className="query" to="/contact">Send us query
       </Link>
       </Button>
     </div>
    </div>
  );
}