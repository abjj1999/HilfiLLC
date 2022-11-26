import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
import { CarFilled } from "@ant-design/icons";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
const text = (
  <p
    style={{
      paddingLeft: 24,
    }}
  >
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);
const HomeCards = () => {
  return (
    <Collapse
      style={{ marginBottom: "150px" }}
      bordered={false}
      defaultActiveKey={["1"]}
    >
      <Panel header="Auto Insurance" key="1">
        <div className="d-flex justify-content-between p-3">
          <p className="w-75">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima ea consequuntur, fuga deleniti
            commodi eaque, similique facilis tempora dolor at labore quis
            voluptates earum id maxime magni, minus molestias accusamus.
          </p>
          <CarFilled style={{ fontSize: "50px" }} />
        </div>
      </Panel>
      <Panel header="Home Insurance" key="2">
        <div className="d-flex justify-content-between p-3">
          <p className="w-75">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima ea consequuntur, fuga deleniti
            commodi eaque, similique facilis tempora dolor at labore quis
            voluptates earum id maxime magni, minus molestias accusamus.
          </p>
          <AiFillHome style={{ fontSize: "50px" }} />
        </div>
      </Panel>
      <Panel header="Medical Insurance" key="3">
        <div className="d-flex justify-content-between p-3">
          <p className="w-75">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima ea consequuntur, fuga deleniti
            commodi eaque, similique facilis tempora dolor at labore quis
            voluptates earum id maxime magni, minus molestias accusamus.
          </p>

          <FaHandHoldingMedical style={{ fontSize: "50px" }} />
        </div>
      </Panel>
    </Collapse>
  );
};

export default HomeCards;
