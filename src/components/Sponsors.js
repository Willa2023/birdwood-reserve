import React from "react";
import sponsors1 from "../assets/img/sponsors1.png";
import sponsors2 from "../assets/img/sponsors2.png";
import sponsors3 from "../assets/img/sponsors3.png";
import sponsors4 from "../assets/img/sponsors4.png";
import sponsors5 from "../assets/img/sponsors5.png";
import KAKA from "../assets/icons/KAKA.png";
import Rotary from "../assets/icons/Rotary.jpg";

function Sponsors() {
  return (
    <div>
      <section className="place section" id="place">
        <div className="place__container container grid">
          <div className="sponsor__content">
            <img src={KAKA} alt="" className="sponsor__img" />
          </div>
          <div className="sponsor__content">
            <img src={Rotary} alt="" className="sponsor__img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
