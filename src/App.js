import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";
import AddPost from "./Components/AddPost/AddPost";
import ViewPost from "./Components/VeiwPost/ViewPost";
import "./App.scss";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      username: "creator",
      post: "What are the similarities between Java and JavaScript?",
      img: "https://www.codewizardshq.com/wp-content/uploads/2022/03/What-is-Java-vs-JavaScript.jpg",
    },
    {
      id: 2,
      username: "creator1",
      post: "The difference between a while and a do…while loop",
      img: "https://brunocapuano.files.wordpress.com/2019/03/while-vs-do-while-loops.jpg",
    },
    {
      id: 3,
      username: "creator2",
      post: "When a programmer tries to remove all the bugs from the code",
      img: "https://i.pinimg.com/564x/6b/05/c1/6b05c18e2c06228321f38211764b7369.jpg",
    },
    {
      id: 4,
      username: "creator3",
      post: "When you finally decide to go to sleep after a long day of work",
      img: "./images/post4.jpeg",
    },
  ]);

  // useEffect(() => {
  //   const datas = localStorage.getItem("data");

  //   setData(JSON.parse(datas) || []);
  // }, []);

  function updateMyValues(value) {
    console.log(value);
    setData((prev) => {
      let newState = [...prev, value];
      localStorage.setItem("data", JSON.stringify(newState));
      return newState;
    });
  }

  return (
    <>
      <div>
        <NavBar />

        <Routes>
          <Route
            path="/addpost"
            index
            element={
              <AddPost functionFromParent={(value) => updateMyValues(value)} />
            }
          />
          <Route path="/" element={<ViewPost data={data} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
