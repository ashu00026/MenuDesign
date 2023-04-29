import React from "react";

function Item({ title, price, desc, img }) {
  return (
    <div className="menu-item">
      <header className="item-info">
        <h5>{title}</h5>
        <div className="item-price">{price}</div>
      </header>
      <img src={img} alt={title} className="menu-item" />
      <h5 className="item-text">{desc}</h5>
    </div>
  );
}

export default Item;
