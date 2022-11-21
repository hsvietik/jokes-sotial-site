import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AddPost.scss";
import toastr from "reactjs-toastr";

const AddPost = (props) => {
  const [formValue, setFormValue] = useState({
    id: "",
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
    console.log(newState);
  };

  // Handle submit
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (formValue.username != null) {
      props.functionFromParent(formValue);
    } else {
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
            <Form.Label>Add link to picture</Form.Label>
            <Form.Control
              type="text"
              name="img"
              value={formValue.img}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>

          <Button
            type="submit"
            className="submit-btn"
            onClick={() => handleSubmit()}
          >
            Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddPost;
