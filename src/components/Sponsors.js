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
      <section class="place section" id="place">
        <div class="place__container container grid">
          <div class="sponsor__content">
            <img src={KAKA} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={Rotary} alt="" class="sponsor__img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
