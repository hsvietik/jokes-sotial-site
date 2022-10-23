import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
// import "./_ViewPost.css";

const ViewPost = (props) => {
  const [count, setCount] = useState(0);
  const countLikes = () => {
    setCount(count + 1);
  };

  const postData = () => {
    let dataList = props.data.map((current) => {
      return (
        <Card style={{ width: "300px" }} key={current.id}> 
          <Card.Img variant="top" src={current.img} />
          <Card.Body>
            <Card.Text>{current.post}</Card.Text>
            <Card.Title>{current.username}</Card.Title>
            <div className="count-bar">
              <p id="count">{count}</p>
              <Button
                type="button"
                className="heart-btn"
                onClick={() => {
                  countLikes();
                }}
              >
                <FaHeart />
              </Button>
            </div>
          </Card.Body>
        </Card>
      );
    });
    return dataList;
  };

  return <div className="card-wrap">{postData()}</div>;
};
export default ViewPost;
