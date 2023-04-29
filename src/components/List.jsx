import React, { useState } from "react";
import data from "../data";
import Item from "./Item";
import Title from "./Title";
// import Categories from "./Categories";
import Categories from "./categories";

function List() {
  const [menu, setMenu] = useState(data);
  let catogories = new Set();
  data.map((item) => {
    const theItem = item.category;
    catogories.add(theItem);
  });
  catogories.add("All");
  //   console.log(data);
  catogories = [...catogories];
  //   console.log(catogories);

  const handleClick = (e) => {
    const option = e.target.innerHTML;
    console.log(e.target.innerHTML);
    if (option === "All") {
      setMenu(data);
      return;
    }
    const updatedMenu = data.filter((item) => {
      return item.category === option;
    });
    console.log(updatedMenu);
    setMenu(updatedMenu);
    return;
  };
  const text = "our Menu";
  return (
    <section className="header">
      <Title text={text} />
      <Categories catogories={catogories} handleClick={handleClick} />
      <div className="section-center">
        {menu.map((entry) => {
          return (
            <div key={entry.id} className="menu">
              <Item {...entry} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default List;
