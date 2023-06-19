import React from "react";
import { useState } from "react";
import SearchAutoComponent from "../../components/searchAuto";

const weatherAPI = {
  key: "8dca64e690c67038906f06670ad1e797",
  base: "https://api.openweathermap.org/data/2.5/weather?",
};

const TestPage = () => {
  const SearchComponent = ({
    onLocationChange,
    onTempChange,
    onConditionsChange,
  }) => {
    // THIS HANDLER HAS TO BE HERE RATHER THAN OUTSIDE WITH THE OTHER SIMILAR LOOKING CONSTANTS DUE TO THE SCOPE OF THE FUNCTION, SEE RETURN STATEMENT
    //  (OTHERWISE, USER HAS TO KEEP CLICKING BACK INTO SEARCH BAR)
    const [search, setSearch] = useState("");

    const handleInputChangeSearch = (event) => {
      setSearch(event.target.value);
    };

    const handleEnterKey = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    const handleSearch = () => {
      console.log("Search pressed!");
      console.log(search);

      fetch(`${weatherAPI.base}zip=${search}&appid=${weatherAPI.key}`)
        .then((result) => result.json())
        .then((result) => {
          console.log(result);

          //LOCATION STUFF
          const location = result.name;
          onLocationChange(location);
          console.log("City: " + location);

          // TEMP STUFF
          let temp = result.main.temp;
          temp = (temp - 273.15) * (9 / 5);
          //USE .TOFIXED LIKE BELOW TO LIMIT DECIMALS
          temp = (temp + 32).toFixed(2);
          onTempChange(temp);
          console.log("Fahrenheit temp:" + temp);

          //CONDTIONS STUFF
          let conditions = result.weather[0].main;
          console.log(conditions);
          onConditionsChange(conditions);
        });
    };

    return (
      //HOW THE USERS OUTPUT IS REPRESENTED
      <div className="searchStuff">
        <input
          type="text"
          placeholder="Enter zipcode"
          value={search}
          //HANDLER CODE FROM ABOVE, SCOPE OF THIS RETURN IS LIMITED
          onChange={handleInputChangeSearch}
          onKeyPress={handleEnterKey}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };

  const [conditions, setConditions] = useState("");
  const handleCondtionsChange = (newConditions) => {
    setConditions(newConditions);
  };

  const [temp, setTemp] = useState("");
  const handleTempChange = (newTemp) => {
    setTemp(newTemp);
  };

  const [location, setLocation] = useState("");
  const handleLocationChange = (newLoc) => {
    setLocation(newLoc);
  };

  

  //ARRAY FROM searchauto containing objects

  return (
    <div className="TestPage">
      <h2>TESTPAGE</h2>
      <br></br>
      <p>Welcome to test page</p>

      <div className="weatherContent">
        <br></br>

        <div className="container1">
          <h3>Weather App:</h3>
          <br></br>
          {/* SEARCH BAR */}
          <SearchComponent
            onLocationChange={handleLocationChange}
            onTempChange={handleTempChange}
            onConditionsChange={handleCondtionsChange}
          />

          {/* Location */}
          <br></br>
          <p className="locationText">
            Location:{" "}
            <u>
              <strong className="retLoc">{location}</strong>
            </u>
          </p>
          <br></br>
          {/* Temperature */}
          <p>
            Temperature Fahrenheit:{" "}
            <u>
              <strong className="retTemp">{temp}</strong>
            </u>
          </p>
          <br></br>
          {/* Condition (sunny/cloud/rainy) */}
          <p>
            Conditions:{" "}
            <u>
              <strong className="retConds">{conditions}</strong>
            </u>
          </p>
          <br></br>
        </div>
      </div>
      <img
        id="weatherImage1"
        src="https://t4.ftcdn.net/jpg/03/66/90/39/240_F_366903907_RzCXMYTOdWnfEmm8wZ3fKnfEOLE2Qhmh.jpg"
        alt="weather"
      />
      <div className="placeImageContainer">
        <br></br>
        <br></br>
        <h1>LOCATION IMAGE HERE </h1>
        <SearchAutoComponent />
      </div>
    </div>
  );
};

export default TestPage;

//IDEA , USING SWITCH OR IF ELSE STATEments, let's have a collection
//of images that change appropriately based on the conditions
