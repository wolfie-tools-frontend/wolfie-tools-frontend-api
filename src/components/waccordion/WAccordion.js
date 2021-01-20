import React, { useState } from "react";
import clsx from "clsx";
import "./waccordion.scss";

function WAccordion(props) {
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
      <div className="waccordion-header">{props.header}</div>
      <div className={active ? "waccordion-body active" : "waccordion-body"}>{props.body}</div>
    </div>
  );
}

export default WAccordion;

// waccordion-header
// waccordion-body