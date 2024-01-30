import React from "react";
import ContentCard from "../ContentCard/ContentCard";

function GengerateNumber(max) {
  let BossName = ["Goliath", "Kuro", "Demonic Goliath", "Keiji"];

  return BossName[Math.floor(Math.random() * (max + 0))];
}

const Header = ({ logo }) => {
  let items = [
    {
      num: 1,
      content: "ReactJS",
    },
    {
      num: 2,
      content: "NodeJS",
    },
    {
      num: 3,
      content: "MongoDB",
    },
    {
      num: 4,
      content: "ExpressJS",
    },
  ];
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello boss {GengerateNumber(3)}</p>
      <div className="container">
        {items.map((item, index) => {
          return <ContentCard key={index} {...item} />;
        })}
      </div>
    </header>
  );
};

export default Header;
