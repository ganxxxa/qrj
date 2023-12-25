import React from "react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";

const Card = ({ backgroundColor, title, logo, link, paragraph }) => {
  return (
    <Link href={link}>
      <div
        className="blog-card relative  w-full inset-shadow "
        style={{
          backgroundColor: `${backgroundColor}`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <Image fill className="object-fit" src={logo} />
          </div>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
