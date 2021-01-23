import React from "react";
import WInput from "../components/winput/WInput";
import "./example.scss";
import "../main.scss";

export default function WInputPage() {
  return (
    <div className="WInputPage">
      <h1>WInput</h1>

      <h2>Default</h2>
      <WInput></WInput>

      <h2>Lined</h2>
      <h3>Default</h3>
      <WInput wType="lined"></WInput>
      <h3>Example</h3>
      <WInput wType="lined"
        barAnimation="center-out"
        labelText="Lined"
        labelAnimation="shrink"
        hoverAnimation="solid"
        inputType="text"
      >
      </WInput>
      <h3>barAnimation</h3>
      <WInput wType="lined"
        barAnimation="center-out"
        labelText="barAnimation: center-out"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="lined"
        barAnimation="left-to-right"
        labelText="barAnimation: left-to-right"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="lined"
        barAnimation="solid"
        labelText="barAnimation: solid"
        labelAnimation="shrink"
      >
      </WInput>
      <h3>labelAnimation</h3>
      <WInput wType="lined"
        barAnimation="center-out"
        labelText="labelAnimation: shrink"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="lined"
        barAnimation="center-out"
        labelText="labelAnimation: up"
        labelAnimation="up"
      >
      </WInput>
      <WInput wType="lined"
        barAnimation="center-out"
        labelText="labelAnimation: fixed"
        labelAnimation="fixed"
      >
      </WInput>
      <WInput wType="lined"
        barAnimation="center-out"
        labelText="labelAnimation: fixed-shrink"
        labelAnimation="fixed-shrink"
      >
      </WInput>
      <h3>hoverAnimation</h3>
      <WInput wType="lined"
        barAnimation="center-out"
        labelText="hoverAnimation: solid"
        labelAnimation="shrink"
        hoverAnimation="solid"
      >
      </WInput>


      <h2>Filled</h2>
      <h3>Default</h3>
      <WInput wType="filled"></WInput>
      <h3>Example</h3>
      <WInput wType="filled"
        barAnimation="center-out"
        hoverAnimation="solid"
        labelText="Filled"
        labelAnimation="shrink"
      >
      </WInput>
      <h3>barAnimation</h3>
      <WInput wType="filled"
        barAnimation="center-out"
        labelText="barAnimation: center-out"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="filled"
        barAnimation="left-to-right"
        labelText="barAnimation: left-to-right"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="filled"
        barAnimation="shade"
        labelText="barAnimation: shade"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="filled"
        barAnimation="solid"
        labelText="barAnimation: solid"
        labelAnimation="shrink"
      >
      </WInput>
      <h3>labelAnimation</h3>
      <WInput wType="filled"
        barAnimation="center-out"
        labelText="labelAnimation: shrink"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="filled"
        barAnimation="center-out"
        labelText="labelAnimation: up"
        labelAnimation="up"
      >
      </WInput>
      <WInput wType="filled"
        barAnimation="center-out"
        labelText="labelAnimation: fixed"
        labelAnimation="fixed"
      >
      </WInput>
      <WInput wType="filled"
        barAnimation="center-out"
        labelText="labelAnimation: fixed-shrink"
        labelAnimation="fixed-shrink"
      >
      </WInput>
      <h3>hoverAnimation</h3>
      <WInput wType="filled"
        barAnimation="center-out"
        labelText="hoverAnimation: solid"
        labelAnimation="shrink"
        hoverAnimation="solid"
      >
      </WInput>


      <h2>Outlined</h2>
      <h3>Default</h3>
      <WInput wType="outlined"></WInput>
      <h3>Example</h3>
      <WInput wType="outlined"
        labelText="Outlined"
        labelAnimation="shrink"
        barAnimation="solid"
        hoverAnimation="solid"
      >
      </WInput>

      <h3>barAnimation</h3>
      <WInput wType="outlined"
        labelText="barAnimation: solid"
        labelAnimation="shrink"
        barAnimation="solid"
      >
      </WInput>
      <WInput wType="outlined"
        labelText="barAnimation: border-highlight"
        labelAnimation="shrink"
        barAnimation="border-highlight"
      >
      </WInput>

      <h3>labelAnimation</h3>
      <WInput wType="outlined"
        labelText="labelAnimation: shrink"
        labelAnimation="shrink"
      >
      </WInput>
      <WInput wType="outlined"
        labelText="labelAnimation: up"
        labelAnimation="up"
      >
      </WInput>
      <WInput wType="outlined"
        labelText="labelAnimation: fixed"
        labelAnimation="fixed"
      >
      </WInput>
      <WInput wType="outlined"
        labelText="labelAnimation: fixed-shrink"
        labelAnimation="fixed-shrink"
      >
      </WInput>

      <h3>hoverAnimation</h3>
      <WInput wType="outlined"
        labelText="hoverAnimation: solid"
        hoverAnimation="solid"
        labelAnimation="shrink"
      >
      </WInput>


      <h2>Input Types</h2>
      <WInput wType="lined"
        barAnimation="left-to-right"
        labelText="label"
        labelAnimation="fixed"
        inputType="text"
        placeholderText="placeholder text"
      >
        <label>bottom label</label>
      </WInput>

      <WInput wType="lined"
        barAnimation="solid"
        labelAnimation="fixed"
        inputType="password"
        placeholderText="Please input your password"
      >
      </WInput>


      <h2>Color</h2>
      <WInput className="outlined">
        <input type="text" className="color-background"/>
        <label>input color-baground</label>
      </WInput>

      <h2>Shape</h2>
      <WInput className="outlined">
        <input type="text" className="pill"/>
        <label>input pill</label>
      </WInput>

      <h2>Shadow</h2>
      <WInput className="outlined">
        <input type="text" className="shadow"/>
        <label>input shadow</label>
      </WInput>

      <div>end</div>

    </div>
  );
}
