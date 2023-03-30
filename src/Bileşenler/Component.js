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
        <div
          className="background"
          style={{ backgroundImage: `url(${data.hdurl})` }}
        ></div>
        <div className="cerceve">
          <div className="date">
            <p>{data.date}</p>
            <label htmlFor="apodDate">apodDate: </label>
            <input
              onChange={(e) => dateChangeHandler(e)}
              type="date"
              value={currentDate}
              name="apodDate"
            ></input>
          </div>
          <div className="govde">
            {data.media_type === "image" && (
              <img src={data.hdurl} alt={data.title} width="500" />
            )}
            {data.media_type === "video" && (
              <iframe width="520" height="400" src={data.url}></iframe>
            )}
            <div className="sag-textler">
              <h1>{data.title}</h1>
              <div className="icerik-yazi">
                <h4>{data.copyright}</h4>
                <p>{data.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
