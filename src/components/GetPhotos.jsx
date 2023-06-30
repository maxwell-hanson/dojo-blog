import React from "react";
import { useEffect } from "react";

const photosAPI = {
  base: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?",
  key: "AIzaSyA-ZQxK_Ewv79maROwoMONM5X2RykvAObA",
  maxHeight: 555,
  maxWidth: 600,
  photoRef: "",
};

const fetchPhoto = () => {
  fetch(
    `${photosAPI.base}maxwidth=${photosAPI.maxWidth}&maxheight=${photosAPI.maxHeight}&photo_reference=${photosAPI.photoRef}&key=${photosAPI.key}`
  )
    .then((result) => result.blob())
    .then((blob) => {
      const imgURL = URL.createObjectURL(blob);

      document.getElementById("image-container").innerHTML = "";

      const img = document.createElement("img");
      img.src = imgURL;
      document.getElementById("image-container").appendChild(img);
    });
};

const GetPhotos = ({ photoID1 }) => {
  photosAPI.photoRef = photoID1;

  //The way I understand this useEffect stuff, we have the invocation of it, notice the double parenthesis. after closing the first set of parenthesis
  // we have the arrow function syntax. Inside the brackets we have everything we want to execute when useEffect is triggered.
  //in this case we are executing the photo fetch method. When we close the brackets, we specifiy what variable we're watching for a change inside [] notation
  //so in this case we are watching photoID1 and when it changes, we trigger useEffect. We then close the second set of parenthesis and put our semicolon.

  useEffect(() => {
    fetchPhoto();
  }, [photoID1]);

  return (
    <div>
      <p id="image-container">images here</p>
    </div>
  );
};

export default GetPhotos;
