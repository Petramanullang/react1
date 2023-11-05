import React, { useState } from "react";
import Sidebar from "./components/Sidebar/sidebar";
import "./app.css";

const App = () => {
  const [isSingle, setIsSingle] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [data, setData] = useState([
    {
      title: "Title One",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, iusto.",
    },
    {
      title: "Title Two",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, iusto.",
    },
    {
      title: "Title Three",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, iusto.",
    },
  ]);

  const handleStatus = () => {
    setIsSingle(false); //bisa di ubah paramnya ke !isSingle kalau mau mengganti bolak balik
  };

  const toggleSideMenu = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="app-wrapper">
      <h1>Hello</h1>
      {isSingle ? <p>Saya single</p> : <p>Sudah menikah</p>}
      <button onClick={handleStatus}>Change Status</button>

      <button className="hamburger" onClick={toggleSideMenu}>{showSideBar ? "X" : "|||"}</button>
      {showSideBar ? <Sidebar /> : null}
      
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
