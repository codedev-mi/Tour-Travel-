import React from "react";

function Card({ item }) {
  return (
    <article className="card" aria-labelledby={`card-${item.id}`}>
      <img src={item.img} alt={item.title} />
      <div className="card-body">
        <h3 id={`card-${item.id}`}>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </article>
  );
}

export default Card;
