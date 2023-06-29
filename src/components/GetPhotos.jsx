import React from "react";

const GetPhotos = ({ photoID1 }) => {










  return (
    <div>
       <p>{photoID1}</p>
    </div>
  );
};

export default GetPhotos;

const handleShowFirstPic = (picID) => {
  console.log(picID);
};

//TRY PASSING PHOTOID 1 AS A USE STATE THATS SET UP IN  GETPLACEIDS USING CONST [PHOTOID1,SETPHOTOID1] = USESTATE("")
