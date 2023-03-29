import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fotograflar.css";

const Govde = (props) => {
  const [icerikYazi, setIcerikYazi] = useState("");
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        const explanation = response.data.explanation;
        console.log(explanation);
        setIcerikYazi(explanation);
      })
      .catch((err) => console.log(err));
  }, []);

  const [icerikFoto, setIcerikFoto] = useState("");
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        const url = response.data.url;
        console.log(url);
        setIcerikFoto(url);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container-2">
        <div className="icerik-foto">
          <img src={icerikFoto} alt="Uzay Fotoğrafı" />
        </div>
        <div className="icerik-yazi">{icerikYazi}</div>
      </div>
    </div>
  );
};

export default Govde;
