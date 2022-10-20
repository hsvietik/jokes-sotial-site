import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";
import AddPost from "./Components/AddPost/AddPost";
import ViewPost from "./Components/VeiwPost/ViewPost";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  const [jokes, changeJokes] = useState([
    {
      username: "creator",
      text: "What are the similarities between Java and JavaScript?",
      image: "./images/post1.png",
    },
    {
      username: "creator",
      text: "The difference between a while and a do…while loop",
      image: "./images/post2.jpeg",
    },
    {
      username: "creator",
      text: "When a programmer tries to remove all the bugs from the code",
      image: "./images/post3.jpeg",
    },
    {
      username: "creator",
      text: "When you finally decide to go to sleep after a long day of work",
      image: "./images/post4.jpeg",
    },
  ]);

  useEffect(() => {}, []);

  function updateMyValues(value) {
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
            path="/"
            index
            element={
              <AddPost
                functionFromParent={(val) => updateMyValues(val)}
                changeJokes={changeJokes}
              />
            }
          />
          <Route path="/viewpost" element={<ViewPost jokes={jokes} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
