import React from "react";
import { Card, Input } from "antd";
import { Select } from "antd";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const onChange = (value) => {
    // console.log(`selected ${value}`);
    setSubject(value);
  };
  const form = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success(
            "Thank you for contacting us. We will get back to you soon."
          );
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="row">
      <Card className="col-lg-6 col-md-8 col-sm-11  offset-lg-3">
        <h1 className="display-3 text-center">Contact Us</h1>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="row d-flex justify-content-center"
        >
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            className="inputf col-lg-6 col-md-7 col-sm-10 offset-1 p-2 mb-3 mt-2 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="number"
            placeholder="Phone Number"
            className="inputf col-lg-6 col-md-7 col-sm-10 offset-1 p-2 mb-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            className="inputf col-lg-6 col-md-7 col-sm-10 offset-1 p-2 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            name="subject"
            onChange={(e) => setSubject(e.target.value)}
            className="selectf col-lg-6 col-md-7 col-sm-10 offset-1 p-2 mb-3"
            aria-label="What are you contacting us about?"
          >
            <option selected>What are you contacting us about?</option>
            <option value="1">Auto Insurance</option>
            <option value="2">Home Insurance</option>
            <option value="3">Medical Insurance</option>
          </select>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary w-25">sub</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
