import React from "react";

export default function BiComponent(props) {
  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    <div>
      <div className="container">
        <p>{data.date}</p>
        <label htmlFor="apodDate">apodDate: </label>
        <input
          onChange={(e) => dateChangeHandler(e)}
          type="date"
          value={currentDate}
          name="apodDate"
        ></input>
        <p>{data.explanation}</p>
        <p>{data.title}</p>
        <img src={data.hdurl} alt={data.title} width="500" />
        <p>{data.media_type}</p>
        <p>{data.service_version}</p>
        <p>{data.hdurl}</p>
      </div>
    </div>
  );
}
