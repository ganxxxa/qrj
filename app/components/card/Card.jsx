import React from "react";
import "./style.scss";

const Card = ({ backgroundColor, title, logo, link, paragraph }) => {
  return (
    <div
      className="blog-card relative w-full inset-shadow "
      style={{
        backgroundColor: `${backgroundColor}`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <img src={logo} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <a href={link}>View project</a>
      </div>
    </div>
  );
};

export default Card;
