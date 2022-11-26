import React from "react";
import { PhoneFilled } from "@ant-design/icons";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
      className="d-flex justify-content-between p-4 bg-light"
    >
      <h1>HiLfi LLC</h1>
      <div className="contact-us d-flex justify-content-between flex-column">
        <PhoneFilled
          style={{
            fontSize: "30px",
          }}
        />
        <span
          style={{
            fontSize: "15px",
          }}
        >
          Call Us: 123-456-7890
        </span>
      </div>
    </div>
  );
};

export default Header;
