import React, { useState } from "react";
import clsx from "clsx";
//import "./waccordion.scss";

function WAccordion({header, body, ...other}) {
  const [active, setActive] = useState(false);

  /*
  componentDidMount() {
    this.toggleAccordion();
  }
  */

  function toggleAccordion(){
    setActive(!active);
  }

  return (
    <div className="waccordion" onClick={toggleAccordion}>
      <div className="waccordion-header">{header}</div>
      <div className={active ? "waccordion-body active" : "waccordion-body"}>{body}</div>
    </div>
  );
}

export default WAccordion;

// waccordion-header
// waccordion-body