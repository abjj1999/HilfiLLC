import React from "react";
import { Carousel } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomeCarousel = () => {
  return (
    <Carousel effect="fade" autoplay>
      <div>
        <h3 style={contentStyle}>Contact Us</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
