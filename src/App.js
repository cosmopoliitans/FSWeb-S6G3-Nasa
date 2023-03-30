import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Component from "./Bileşenler/Component.js";

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2023-02-14").toISOString().slice(0, 10)
  );

  useEffect(() => {
    // Optionally the request above could also be done as
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "pPTsu2lZnwq1biDViyAeBjAeb4e85iJirWWkfYwg",
          date: datePicker,
        },
      })
      .then(function(response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {});
  }, [datePicker]);

  return (
    <div className="App">
      <Component
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
