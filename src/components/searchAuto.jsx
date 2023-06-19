import React from "react";
import { useState } from "react";

const placesAutoCompleteAPI = {
  base: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?",
  key: "AIzaSyA-ZQxK_Ewv79maROwoMONM5X2RykvAObA",
};

const SearchAutoComponent = ({}) => {
  const [autoPlace, setAutoPlace] = useState("");

  const handleAutoSearchChange = (event) => {
    setAutoPlace(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      getPlacesAutoComplete();
    }
  };

  const getPlacesAutoComplete = () => {
    console.log(autoPlace);
    console.log("Auto button pressed.");

    fetch(
      `${placesAutoCompleteAPI.base}input=${autoPlace}&types=(cities)&key=${placesAutoCompleteAPI.key}`
    )
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={handleAutoSearchChange}
        value={autoPlace}
        onKeyUp={handleEnterKey}
      />
      <button onClick={getPlacesAutoComplete}>Search by City Name</button>
    </div>
  );
};

export default SearchAutoComponent;
