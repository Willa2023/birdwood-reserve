import React from "react";
import about1 from "../assets/img/about1.jpg";
import about2 from "../assets/img/about2.jpg";
import volunteer from "../assets/img/volunteer.jpg";
import pool from "../assets/img/pool.jpg";
import road from "../assets/img/road.jpg";

function About() {
  return (
    <div>
      <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title about__title">About</h2>
            <p className="about__description">
              KĀKĀ(Karori Kaitiaki) has teamed up with Rotary, supported by WCC
              and Zealandia, to design, fund and build an exciting new track
              from Birdwood Street - through Birdwood Reserve - to Zealandia.
              <br />
              <br />
              For decades Birdwood Reserve has been largely ignored despite being at the very entrance to
Karori. It is a beautiful stream gully, but steep sided and hard to access other than via the round
the Sanctuary, Saint John's Pool track. As a result, Birdwood Reserve had been unloved, weedy
and full of rubbish.
<br />
            </p>
            <a href="#" className="button">
              Read More
            </a>
          </div>

          <div className="about__img">
            <div className="about__img-overlay">
              <img src={volunteer} alt="" className="about__img-one" />
            </div>

            <div className="about__img-overlay">
              <img src={pool} alt="" className="about__img-two" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
