import { Button, Alert } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { Modal, Form } from "react-bootstrap";

export const RegisterComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const cmfPasswordRef = useRef();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const submitForm = (e) => {
    e.preventDefault();
    setError("");
    if (passwordRef.current.value !== cmfPasswordRef.current.value) {
      console.log("nooooo");
      return setError("Password does not match");
    }
    console.log(`email is ${emailRef.current.value}`);
  };

  return (
    <>
      <div onClick={openForm} className="btn btn-outline-secondary mx-2">
        Register
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
              <Form.Label>Email Addres</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required ref={cmfPasswordRef} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
