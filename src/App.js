import React, { useState } from "react";
import "./App.css";
import ListCom from "./ListCom";

const App = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewitem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listItem = (evnt) => {
    evnt.preventDefault();
    setNewitem((prevItem) => {
      return [...prevItem, item];
    });

    setItem(" ");
  };

  const deleteItem = (id) => {
    console.log("dlt");
    setNewitem((prevItem) => {
      return prevItem.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="todo">
          <div className="heading">
            <h1>Todo list</h1>
          </div>
          <form>
            <input
              type="text"
              name="todo"
              id="todo"
              value={item}
              placeholder="Add a Item"
              onChange={itemEvent}
            />
            <button onClick={listItem}>
              <i class="fa-solid fa-plus"></i>
            </button>
          </form>
          <ol className="item_box">
            {newItem.map((value, index) => {
              return (
                <ListCom
                  text={value}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
