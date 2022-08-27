import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cyber_tesla from "../assets/images/cyber_tesla.jpg";
import main_tesla from "../assets/images/main_tesla_wall.jpg";
import model_3 from "../assets/images/model_3.jpg";
import tesla_roadster from "../assets/images/tesla_roadster.jpg";
import "./styles/BgImages.css";
import React from "react";

function BgImages() {
  return (
    <div className="bg">
      <Carousel
        className="main_slide"
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        infiniteLoop={true}
        stopOnHover={false}
        dynamicHeight={true}
      >
        <div>
          <img src={main_tesla} className="main_img" alt="teslaHere" />
        </div>
        <div>
          <img src={cyber_tesla} className="main_img" alt="teslaHere" />
        </div>
        <div>
          <img src={tesla_roadster} className="main_img" alt="teslaHere" />
        </div>
        <div>
          <img src={model_3} className="main_img" alt="teslaHere" />
        </div>
      </Carousel>
    </div>
  );
}

export default BgImages;
