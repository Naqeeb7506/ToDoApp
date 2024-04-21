import React, { useState } from "react";

const ListCom = (props) => {
  //   const [line, setLine] = useState(false);

  //   const complete = () => {
  //     setLine(true);
  //   };

  return (
    <div className="item">
      <i
        className="fa-solid fa-trash"
        onClick={() => {
          props.onSelect(props.id);
        }}
      ></i>
      <li>{props.text}</li>
    </div>
  );
};

export default ListCom;
