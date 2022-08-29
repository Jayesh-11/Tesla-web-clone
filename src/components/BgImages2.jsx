import React from "react";
import "./styles/BgImages2.css";
import { Carousel } from "react-responsive-carousel";
import Solar_roof from "../assets/images/Solar_roof.jpg";
import Giga_tesla from "../assets/images/Giga_tesla.jpg";
import PowerWall_tesla from "../assets/images/PowerWall_tesla.jpg";
import tesla_roadster from "../assets/images/Roadster_tesla.jpg";
import model_S from "../assets/images/Model_S.jpg";
import model_X from "../assets/images/Model_X.jpg";

function BgImages2() {
  return (
    <div className="bg2">
      <Carousel
        className="main_slide_2"
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
          <img src={Solar_roof} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/solarpanels" className="legend">
            Solar Roof
          </a>
        </div>
        <div>
          <img src={Giga_tesla} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/gigafactory" className="legend">
            Giga Factory
          </a>
        </div>
        <div>
          <img src={PowerWall_tesla} className="main_img" alt="teslaHere" />
          <a href="https://www.tesla.com/powerwall" className="legend">
            Power Wall
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default BgImages2;
