import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cyber_tesla from "../assets/images/Cyber_tesla.jpg";
import model_Y from "../assets/images/Model_Y.jpg";
import model_3 from "../assets/images/Model_3.jpg";
import tesla_roadster from "../assets/images/Roadster_tesla.jpg";
import model_S from "../assets/images/Model_S.jpg";
import model_X from "../assets/images/Model_X.jpg";
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
        interval={5000}
        showStatus={false}
        infiniteLoop={true}
        stopOnHover={false}
        dynamicHeight={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img src={cyber_tesla} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/cybertruck" className="legend">
            Cyber Truck
          </a>
        </div>
        <div>
          <img src={model_3} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/model3" className="legend">
            Model 3
          </a>
        </div>
        <div>
          <img src={model_Y} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/modely" className="legend">
            Model Y
          </a>
        </div>
        <div>
          <img src={model_S} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/models" className="legend">
            Model S
          </a>
        </div>
        <div>
          <img src={model_X} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/modelx" className="legend">
            Model X
          </a>
        </div>
        <div>
          <img src={tesla_roadster} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/roadster" className="legend">
            Roadster
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default BgImages;
