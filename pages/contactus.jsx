import React from "react";
import { Card, Input } from "antd";
import { Select } from "antd";

const Contact = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Card className="">
      <h1 className="display-3 text-center">Contact Us</h1>
      <form
        action="https://formsubmit.co/b5c217df1bc68eaec2ea55af77c1ed4e"
        className="row d-flex justify-content-center"
        method="post"
      >
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          className="inputf col-8 p-2 mb-3 mt-2"
        />
        <Input
          type="text"
          name="number"
          placeholder="Phone Number"
          className="inputf col-8 p-2 mb-3"
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          className="inputf col-8 p-2 mb-3"
        />

        <Select
          showSearch
          name="subject"
          className="inputf col-8 p-2 mb-3"
          placeholder="Select a the reason for contacting us"
          optionFilterProp="children"
          onChange={onChange}
          options={[
            {
              value: "Auto Insurance",
              label: "Auto Insurance",
            },
            {
              value: "Home Insurance",
              label: "Home Insurance",
            },
            {
              value: "Medical Insurance",
              label: "Medical Insurance",
            },
          ]}
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary w-25">sub</button>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://localhost:3000/"
        ></input>
      </form>
    </Card>
  );
};

export default Contact;
