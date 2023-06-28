import React from "react";

let photoArray = [];
let photoObjArray = [];

const placeDetailsAPI = {
  base: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?",
  key: "AIzaSyA-ZQxK_Ewv79maROwoMONM5X2RykvAObA",
  place: "ChIJETbhTW8f54kRp3YOV7BgSMY",
};




const getPlaceDetails = (placeID) => {
  photoObjArray.length = 0;
  console.log("fetching place details with placeID of:" + placeID);

  fetch(
    `${placeDetailsAPI.base}place_id=${placeDetailsAPI.place}&key=${placeDetailsAPI.key}`
  )
    .then((result) => result.json())
    .then((result) => {
      photoObjArray = result.result.photos;
      console.log(photoObjArray);
      extractPhotoRefs(photoObjArray);
    });
};




const extractPhotoRefs = (array) => {
  photoArray.length = 0;
  for (const photoObjects of array) {
    photoArray.push(photoObjects.photo_reference);
  }
  // console.log(photoArray);
  console.log(photoArray[0]);
};






const GetPhotos = ({ placeID, userClickedPlace }) => {
  placeDetailsAPI.place = placeID;

  let photoButton = null;
  if (userClickedPlace) {
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
