import React from "react";
import WInput from "../components/winput/WInput";
import "./example.scss";
import "../main.scss";

export default function WInputPage() {
  return (
    <div className="WInputPage">
      <h1>WInput</h1>
      <h2>Lined</h2>

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
      <h3>Example</h3>
      <WInput wType="filled"
        barAnimation="center-out"
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
      <h3>Example</h3>
      <WInput className="outlined">
        <fieldset>
          <input type="text" required="required" className="hover-solid"/>
          <span class="bar-solid"></span>
          <label>Outlined</label>
          <legend>Outlined</legend>
        </fieldset>
      </WInput>

      <h3>hoverAnimation</h3>
      <WInput className="outlined">
        <input type="text" className="pill label3 hover-solid" required="required" />
        <label>OutlinedPill HoverSolid L3</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="pill label3 hover-shadow" required="required" />
        <label>OutlinedPill HoverShadow L3</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label4 hover-border-highlight" required="required" />
        <label>HoverBorderHighlight but doesnt hover L4</label>
      </WInput>

      <h3>labelAnimation</h3>
      <WInput className="outlined">
        <input type="text" className="label2" required="required" />
        <span class="bar-solid"></span>
        <label>Outlined L2 B0</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label3" required="required" />
        <span class="bar-solid"></span>
        <label>Outlined L3 BO</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label4" required="required" />
        <span class="bar-solid"></span>
        <label>Outlined L4 BO</label>
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

      <WInput wType="lined">
      </WInput>
      <WInput wType="filled">
      </WInput>
      <WInput wType="outlined">
      </WInput>


      <h2>Color</h2>
      <WInput className="outlined">
        <input type="text" className="color-background" required="required" />
        <span class="barOutlined"></span>
        <label>OutlinedColored BO</label>
      </WInput>

      <h2>Shape</h2>
      <WInput className="outlined">
        <input type="text" className="pill label3" required="required" />
        <span class="barOutlined"></span>
        <label>OutlinedPill L3 BO</label>
      </WInput>

      <h2>Shadow</h2>
      <WInput className="outlined">
        <input type="text" className="color-background label3 shadow" required="required" />
        <span class="barOutlined"></span>
        <label>OutlinedColored Shadow L3 BO</label>
      </WInput>

      <div>end</div>

    </div>
  );
}
