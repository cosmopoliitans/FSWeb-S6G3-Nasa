import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Date.css";

const Date = (props) => {
  const [tarih, setTarih] = useState("");
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        const date = res.data.date;
        console.log(date);
        setTarih(date);
      })
      .catch((err) => console.log(err));
  }, []);

  const [copyRight, setCopyRight] = useState("");
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        const copyright = response.data.copyright;
        console.log(copyright);
        setCopyRight(copyright);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="copyright">
        <p>Date: {tarih}</p>
        <p>&copy; {copyRight}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Date;
