import React from "react";
import about1 from "../assets/img/about1.jpg";
import about2 from "../assets/img/about2.jpg";
import volunteer from "../assets/img/volunteer.jpg";
import pool from "../assets/img/pool.jpg";
import road from "../assets/img/road.jpg";

function About() {
  return (
    <div>
      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">More Information</h2>
            <p class="about__description">
              KĀKĀ(Karori Kaitiaki) has teamed up with Rotary, supported by WCC
              and Zealandia, to design, fund and build an exciting new track
              from Birdwood Street - through Birdwood Reserve - to Zealandia.
              <br />
              <br />
              For decades Birdwood Reserve has been largely ignored despite
              being at the very entrance to Karori. It is a beautiful stream
              gully, but steep sided and hard to access other than via the round
              the Sanctuary, Saint John's Pool track. As a result, Birdwood
              Reserve had been unloved, weedy and full of rubbish. KĀKĀ and its
              predecessor Friends of Birdwood Reserve members have in recent
              years pulled literally truckloads of rubbish out of the reserve,
              as well as weeding, planting and trapping pests.
              <br />
              <br />
              KĀKĀ and its predecessor Friends of Birdwood Reserve members have
              in recent years pulled literally truckloads of rubbish out of the
              reserve, as well as weeding, planting and trapping pests.
              <br />
              <br />
              Zealandia visitors increasingly park or arrive by bus at Appleton
              Park. The new track will give visitors a more beautiful,
              interesting way to get to Zealandia. We also aim to create a
              greater sense of community ownership, appreciation, and care of
              Birdwood Reserve through better access and interpretation.
              <br />
              <br />
              We've worked with Council to decide the best route as some parts
              are steep, and we also need to cross the Kaiwharawhara stream
              once. This means the track needs to be partly built by
              contractors, and partly by volunteers. The cost of construction -
              in cash, materials and labour - is estimated at $90,000. We are
              now raising funds, and so far have commitments for about half that
              amount. We'd love your help - whether donations or offers of
              labour. Funding permitting, we will build the track later this
              year.
              <br />
              <br />
              Your journey along the track will be full of potential stories.
              The Kaiwharawhara Stream (Te Mahanga branch) runs through Birdwood
              Reserve, from the historic 1870's Karori Dam in Zealandia, to a
              tunnel under the 1930s Appleton Park landfill. You'll pass the
              1868-71 Golden Crown gold mine and the 1909 and 1933 St John's
              Pools. You could also learn about the Wellington fault, fish and
              fish ladders, community care for the valley, and more.
            </p>
            <a href="#" class="button">
              Donate Now
            </a>
          </div>

          <div class="about__img">
            <div class="about__img-overlay">
              <img src={volunteer} alt="" class="about__img-one" />
            </div>

            <div class="about__img-overlay">
              <img src={pool} alt="" class="about__img-two" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
