import React from "react";
import {
  LinkedinFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="d-flex justify-content-between p-4 mt-auto bg-light footer-sytle">
      <div>
        <h1>HiLfi LLC</h1>
      </div>
      <div className="d-flex justify-content-between p-1 icon_size2 text-primary">
        <LinkedinFilled className="p-1" />
        <TwitterSquareFilled className="p-1" />
        <GithubFilled className="p-1" />
      </div>
    </div>
  );
};

export default Footer;
