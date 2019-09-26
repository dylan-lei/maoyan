import React from "react";
import "../../../../assets/style/movie/release/preview.css";

class Preview extends React.Component {
  render() {
    return (
      <div className="page-content" style={{ paddingTop: "56.25vw" }}>
        <div className="video-player">
          <div className="videoplayer">
            <video
              id="z-video"
              className="video-js vjs-default-skin vjs-playing"
              preload="auto"
              width="100%"
              height="100%"
              controls
              poster="http://p0.meituan.net/movie/4216c056a4a17182eb396113a51c7d06339717.jpg@70q_750w"
              data-setup="{}"
            >
              <source
                src="http://maoyan.meituan.net/movie/videos/854x48042eb81b88ac849adb286c74a7151d45d.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <section className="preview-play">
          <div className="preview-intro">
            <div className="preview-buy-box">
              <div className="preview-buy-btn">
                <a href="##" className="link btn btn-buy blue">
                  <span>预售</span>
                </a>
              </div>
              <span className="preview-movie-intro-score">
                <span className="preview-movie-score preview-movie-wish">
                  48.6万
                </span>
                <span>人想看</span>
              </span>
            </div>
            <img
              className="img noneBg movie-img img"
              src="https://p0.meituan.net/movie/4c01895cfd53e82f7c3048c407974a6b4739229.jpg@160w_220h.webp"
              alt=""
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Preview;