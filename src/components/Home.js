import React from "react";
import home1 from "../assets/img/home1.jpg";
import home2 from "../assets/img/home2.jpg";

function Home() {
  return (
    <section class="home" id="home">
      <img src={home1} alt="" class="home__img" />

      <div class="home__container container grid">
        <div class="home__data">
          <span class="home__data-subtitle">Discover Karori</span>
          <h1 class="home__data-title">
            An Exciting New Track<br /> <b>for Karori{" "}</b>
            And <br /><b> New Access to Zealandia!
            </b>
          </h1>
          <a href="#" class="button">
            Explore
          </a>
        </div>

        <div class="home__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="home__social-link"
          >
            <i class="ri-facebook-box-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="home__social-link"
          >
            <i class="ri-instagram-fill"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            class="home__social-link"
          >
            <i class="ri-twitter-fill"></i>
          </a>
        </div>

        <div class="home__info">
          <div>
            <span class="home__info-title">5 best places to visit</span>
            <a
              href=""
              class="button button--flex button--link home__info-button"
            >
              More <i class="ri-arrow-right-line"></i>
            </a>
          </div>

          <div class="home__info-overlay">
            <img src={home2} alt="" class="home__info-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
