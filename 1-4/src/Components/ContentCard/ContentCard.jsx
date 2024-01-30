import React from "react";
import "./ContentCard.css";

const ContentCard = ({ num, content }) => {
  return (
    <div className="card">
      <div className="item">
        <h1>{num}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContentCard;
