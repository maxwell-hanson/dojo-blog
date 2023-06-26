import React from "react";
import { useState } from "react";
import GetPhotos from "./GetPhotos";

const placesAutoCompleteAPI = {
  base: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?",
  key: "AIzaSyA-ZQxK_Ewv79maROwoMONM5X2RykvAObA",
};

const SearchAutoComponent = ({}) => {
  const [autoPlace, setAutoPlace] = useState("");
  const [predictionList, setPredictionList] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const [userClickedPlace, setUserClickedPlace] = useState(false);

  // let userClickedPlace = false;

  const handleSelectID = (predicitonObj) => {
    setUserClickedPlace(true);
    setSelectedID(predicitonObj.place_id);
    // Below 2 lines
    const newPredictionList = [predicitonObj];
    setPredictionList(newPredictionList);
    console.log(
      "User selected ID: " +
      predicitonObj.place_id +
        " for the city of: " +
        predicitonObj.description
    );
  };

  const handleAutoSearchChange = (event) => {
    setAutoPlace(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      getPlacesAutoComplete();
    }
  };

  const handleSuggestionsChange = (newSuggestions) => {
    setPredictionList(newSuggestions);
  };

  const idArray = [];

  const getPlacesAutoComplete = () => {
    console.log(autoPlace);
    console.log("Auto button pressed.");

    fetch(
      `${placesAutoCompleteAPI.base}input=${autoPlace}&types=(cities)&key=${placesAutoCompleteAPI.key}`
    )
      .then((result) => result.json())
      .then((result) => {
        console.log(result);

        for (const predicts of result.predictions) {
          console.log(predicts.description);
          idArray.push(predicts.place_id);
        }

        handleSuggestionsChange(result.predictions);
        console.log(idArray);
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
      <br></br>
      <p>Predictions:</p>
      <ul>
        {predictionList.map((prediction, index) => (
          <li key={index}>
            <a href="#" onClick={() => handleSelectID(prediction)}>
              {prediction.description}
            </a>
          </li>
        ))}
      </ul>
      <br></br>
      <GetPhotos placeID={selectedID} userClickedPlace={userClickedPlace} />
    </div>
  );
};

export default SearchAutoComponent;

//saving stuff
