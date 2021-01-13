import React from "react";
import clsx from "clsx";
import "./waccordion.scss";

class WAccordion extends React.Component {
  constructor() {
    super();
    // this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {active: false}
  }

  /*
  componentDidMount() {
    this.toggleAccordion();
  }
  */

  toggleAccordion = () => {
    this.setState({active: !this.state.active});
  }
  
  render() {
    return (
      <div className="waccordion" onClick={this.toggleAccordion}>
        <div className="waccordion-header">{this.props.header}</div>
        <div className={this.state.active ? "waccordion-body active" : "waccordion-body"}>{this.props.body}</div>
      </div>
    );
  }

} 
  export default WAccordion;

// waccordion-header
// waccordion-body