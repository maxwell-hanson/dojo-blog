import React from "react";
import { useEffect } from "react";

const forTest = (arr) => {
  let testNum = 0;
  for (let i = 0; i < arr.length; i++) {
    testNum = i;
  }
  return testNum;
};

const GetPhotosFromArray = ({ referenceIDArray }) => {
  let numb = forTest(referenceIDArray);

  return (
    <div>
      <h3>hello your for loop ran: {numb} times</h3>
    </div>
  );
};

export default GetPhotosFromArray;
