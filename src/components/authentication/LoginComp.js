import React from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { useState, useRef } from "react";

export const LoginComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const submitForm = (e) => {
    e.preventDefault();
    setError("");
    console.log(`email is ${emailRef.current.value}`);
  };

  return (
    <>
      <div onClick={openForm} className="btn btn-outline-secondary mx-2">
        Login
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
