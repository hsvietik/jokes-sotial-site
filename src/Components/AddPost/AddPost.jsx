import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./AddPost.scss";
import toastr from "reactjs-toastr";

const AddPost = (props) => {
  const [formValue, setFormValue] = useState({
    username: "",
    post: "",
    img: "",
  });

  toastr.options = {
    positionClass: "toast-top-right",
    onclick,
  };

  // Handling change form
  const handleChange = (e) => {
    let newVal = e.target.value;
    let keyToChange = e.target.name;
    setFormValue({ ...formValue, [keyToChange]: newVal });
    const newState = { ...formValue };
  };

  // Handle submit
  const handleSubmit = (e) => {
    if (formValue.username != null) {
      props.functionFromParent(formValue);
    } else {
      e.preventDefault();
      alert("Please fill up username");
    }
  };

  return (
    <>
      <div className="AddContainer">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username </Form.Label>
            <Form.Control
              name="username"
              value={formValue.username}
              type="text"
              placeholder="Username..."
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add post</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="post"
              value={formValue.post}
              placeholder="Add here ..."
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Browse</Form.Label>
            <Form.Control
              type="file"
              name="img"
              value={formValue.img}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button type="submit" onClick={() => handleSubmit()}>
            Add
          </Button>
        </Form>

        <Link>View</Link>
      </div>
    </>
  );
};

export default AddPost;
