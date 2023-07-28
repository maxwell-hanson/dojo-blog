import React from "react";
import { useState } from "react";
import GetPhotos from "./GetPhotos";
import GetPhotosFromArray from "./GetPhotosFromArray";

let photoArray = [];
let photoObjArray = [];

const placeDetailsAPI = {
  base: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?",
  key: "AIzaSyA-ZQxK_Ewv79maROwoMONM5X2RykvAObA",
  place: "ChIJETbhTW8f54kRp3YOV7BgSMY",
};

const GetPlaceIDs = ({ placeID, userClickedPlace }) => {
  const [picID, setPicID] = useState("");
  const [requestedPics, setRequestedPics] = useState(false);
  const [refArray, setRefArray] = useState([]);

  const handlePicVisibility = () => {
    setRequestedPics(true);
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
    setPicID(photoArray[0]);
    console.log(picID);
    console.log(photoArray[0]);
    setRefArray(photoArray);
  };

  placeDetailsAPI.place = placeID;

  let photoButton = null;
  if (userClickedPlace) {
    photoButton = (
      <button
        onClick={() => {
          getPlaceDetails(placeID);
          handleShowFirstPic(picID);
          handlePicVisibility();
        }}
      >
        Click for photos!!!
      </button>
    );
  }

  return (
    <div>
      <p>{photoButton}</p>
      {requestedPics && <GetPhotos photoID1={picID} />}
      {requestedPics && <GetPhotosFromArray referenceIDArray={refArray}/>}
    </div>
  );
};

export default GetPlaceIDs;

const handleShowFirstPic = (picID) => {
  console.log(picID);
};
