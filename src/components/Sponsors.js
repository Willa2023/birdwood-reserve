import React from "react";
import sponsors1 from "../assets/img/sponsors1.png";
import sponsors2 from "../assets/img/sponsors2.png";
import sponsors3 from "../assets/img/sponsors3.png";
import sponsors4 from "../assets/img/sponsors4.png";
import sponsors5 from "../assets/img/sponsors5.png";

function Sponsers() {
  return (
    <div>
      <section class="sponsor section">
        <div class="sponsor__container container grid">
          <div class="sponsor__content">
            <img src={sponsors1} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={sponsors2} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={sponsors3} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={sponsors4} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={sponsors5} alt="" class="sponsor__img" />
          </div>
        </div>
      </section>
    </div>
  );
}
