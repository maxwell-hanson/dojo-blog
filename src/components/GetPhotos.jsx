import React from "react";

const placeDetailsAPI = {
  base: "https://maps.googleapis.com/maps/api/place/details/json?",
  key: "AIzaSyA-ZQxK_Ewv79maROwoMONM5X2RykvAObA",
  place: "ChIJETbhTW8f54kRp3YOV7BgSMY",
};

const getPlaceDetails = (placeID) => {
  console.log("fetching place details with placeID of:" + placeID);

  fetch(
    `${placeDetailsAPI.base}place_id=${placeDetailsAPI.place}&key=${placeDetailsAPI.key}`
  )
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
    });

  // fetch(`${weatherAPI.base}zip=${search}&appid=${weatherAPI.key}`)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       console.log(result);
};

const GetPhotos = ({ placeID, userClickedPlace }) => {
  // placeDetailsAPI.place = placeID;

  let photoButton = null;
  if (userClickedPlace) {
    //WE WANT PHOTOBUTTON TO BECOME THE PHOTOS THAT WE DISPLAY ONLY WHEN userClickedPlace is true!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!

    photoButton = (
      <button onClick={() => getPlaceDetails(placeID)}>
        Click for photos!!!
      </button>
    );
  }

  return (
    <div>
      <p>{photoButton}</p>
    </div>
  );
};

export default GetPhotos;
