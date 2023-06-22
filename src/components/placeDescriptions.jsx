import React from "react";

const PlaceDescriptions = ({ placesArray }) => {
  return (
    <div>
      <p>{getDescript({ placesArray })}</p>
      <ul>
        <li>"hello"</li>
      </ul>
    </div>
  );
};

export default PlaceDescriptions;

const getDescript = (placesArray) => {
  console.log(placesArray.placesArray);
  let descArray = [];
  for (const descripts of placesArray.placesArray) {
    descArray.push(descripts.description);
  }
  return (
    <div>
      {descArray[0]}
      <p>Done</p>
    </div>
  );
};
