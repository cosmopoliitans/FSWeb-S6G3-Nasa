import React from "react";
import "./BaslikBolumu.css";

const BaslikBolumu = (props) => {
  return (
    <div>
      <div className="container">
        <div className="baslik">
          <h2>Astronomy Photo Of The Day</h2>
          <span role="img" aria-label="go!">
            🚀
          </span>
        </div>
        <div className="aciklama">
          <p>
            NASA'nın Goddard Uzay Uçuş Merkezi'nce, her gün astronomiyle ilgili
            yeni bir fotoğrafın ve bilimsel açıklamasının yayımlandığı popüler
            bir internet sitesi bulunmaktadır. Bu sitede 16 Haziran 1995'ten
            beri 3600’den fazla görüntü yayımlandı ve giderek daha çok dilde
            yayımlanan internet aynaları ile astronomi meraklarına sunulmaya
            devam ediyor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BaslikBolumu;
