import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
// import "./_ViewPost.css";

const ViewPost = () => {
  return (
    <>
      <Card style={{ width: "200px" }}>
        <Card.Img variant="top" src={require("./images/post1.png")} />
        <Card.Body>
          <Card.Text>
            "What are the similarities between Java and JavaScript?"
          </Card.Text>
          <Card.Title>"creator"</Card.Title>
          <div>
            <div>
              <FaHeart />
            </div>
            <p id="count">Count</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ViewPost;

// // let count = 0;
// // function countLikes() {
// //   count = count + 1;
// //   return count;
// // }
// function ViewPost() {
//   return const [jokes, changeJokes] = useState([
//     {
//       id: 1,
//       username: "creator",
//       text: "What are the similarities between Java and JavaScript?",
//       image: "./images/post1.png",
//     },
//     {
//       id: 2,
//       username: "creator",
//       text: "The difference between a while and a do…while loop",
//       image: "./images/post2.jpeg",
//     },
//     {
//       id: 3,
//       username: "creator",
//       text: "When a programmer tries to remove all the bugs from the code",
//       image: "./images/post3.jpeg",
//     },
//     {
//       id: 4,
//       username: "creator",
//       text: "When you finally decide to go to sleep after a long day of work",
//       image: "./images/post4.jpeg",
//     },
//   ]);
//   const buildCards = () => {
//     return jokes.map((current) => (
//       <Card style={{ width: "200px" }} key={current.id}>
//         <Card.Img variant="top" src={require(current.img)} />
//         console.log(current.img)
//         <Card.Body>
//           <Card.Text>{current.text}</Card.Text>
//           console.log(current.text)
//           <Card.Title>{current.username}</Card.Title>
//           <div>
//             <div
//             // onClick={() => countLikes()}
//             >
//               <FaHeart />
//             </div>
//             <p id="count">count</p>
//           </div>
//         </Card.Body>
//       </Card>
//     ));
//   };
//   return buildCards();
// }
// export default ViewPost;
