import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Postreq = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  function firstNameChangeHandler(e) {
    setEnteredFirstName(e.target.value);
  }
  function emailChangeHandler(e) {
    setEnteredEmail(e.target.value);
  }
  function phoneChangeHandler(e) {
    setEnteredPhone(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();

    async function storeData() {
      const formData = {
        name: enteredFirstName,
        email: enteredEmail,
        phone: enteredPhone,
      };
      try {
        let headers = {
          "Content-Type": "application/json; charset=utf-8",
        };
        const res = await axios.post(
          "http://127.0.0.1:8000/spacificmanpower/userreg/",
          formData,
          { headers: headers }
        );
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    storeData();
    setEnteredFirstName("");
    setEnteredEmail("");
    setEnteredPhone("");
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Phone no"
          value={enteredPhone}
          onChange={phoneChangeHandler}
          maxLength={10}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Postreq;
