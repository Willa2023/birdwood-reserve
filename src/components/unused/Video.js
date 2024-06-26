import React from "react";
import video from "../assets/video/video.mp4";

function Video() {
  return (
    <div>
      <section class="video section">
        <h2 class="section__title">Video Tour</h2>

        <div class="video__container container">
          <p class="video__description">
            Find out more with our video of the most beautiful and pleasant
            places for you and your family.
          </p>

          <div class="video__content">
            <video id="video-file">
              <source src={video} type="video/mp4" />
            </video>

            <button class="button button--flex video__button" id="video-button">
              <i class="ri-play-line video__button-icon" id="video-icon"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Video;
