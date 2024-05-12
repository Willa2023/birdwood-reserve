import React from "react";
import map from "../assets/img/map.png";

function Donate() {
  return (
    <div>
      {/* <!--==================== DISCOVER ====================--> */}
      <section className="discover section" id="discover">
        <h2 className="section__title">Donate Information</h2>
        <p>
          Donations: Rotary Club of Karori Trust Acc 03-1540-0014117-003 (Ref:
          BirdwoodTrack)
          <br />
          <br />
          To help, contact: Dawn at dawn@sgcnz.org.nz or Siva at
          karorikaitiaki@gmail.com{" "}
        </p>

        <div className="discover__container container swiper-container">
          <div className="swiper-wrapper">
            <img src={map} alt="" className="about__img-two" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
