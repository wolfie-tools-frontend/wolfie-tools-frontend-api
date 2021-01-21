import React from "react";
import WInput from "../components/winput/WInput";
import "./example.scss";
import "../main.scss";

export default function WInputPage() {
  return (
    <div className="WInputPage">
      <h1>WInput</h1>

      <WInput className="outlined">
        <fieldset>
          <input type="text" required="required" />
          <label>Outlined</label>
          <legend>Outlined</legend>
        </fieldset>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label2" required="required" />
        <span class="barOutlined"></span>
        <label>Outlined L2 B0</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label3" required="required" />
        <span class="barOutlined"></span>
        <label>Outlined L3 BO</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="color-background" required="required" />
        <span class="barOutlined"></span>
        <label>OutlinedColored BO</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="pill label3" required="required" />
        <span class="barOutlined"></span>
        <label>OutlinedPill L3 BO</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="color-background label3 shadow" required="required" />
        <span class="barOutlined"></span>
        <label>OutlinedColored Shadow L3 BO</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="pill label3 hover-shadow" required="required" />

        <label>OutlinedPill HoverShadow L3</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label4" required="required" />
        <span class="barOutlined"></span>
        <label>Outlined L4 BO</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label4 hover-border-highlight" required="required" />
        <label>Outlined HoverBorderHighlight L4</label>
      </WInput>

      <WInput className="lined">
        <span class="bar-left-to-right"></span>
        <label>Lined</label>
      </WInput>

      <WInput className="filled">
        <span class="bar-left-to-right"></span>
        <label>Filled</label>
      </WInput>

      <WInput className="filled">
        <span class="bar3"></span>
        <label>animation3 filled B3</label>
      </WInput>

      <WInput className="filled">
        <span class="bar-center-out"></span>
        <label>Filled center-out</label>
      </WInput>

      <WInput className="lined">
        <span class="bar-center-out"></span>
        <label>Lined center-out</label>
      </WInput>

      <WInput
        inputType="number">
      </WInput>
      
      <WInput
        wType="lined"
        barAnimation="center-out"
        labelText="test">
          <label>test</label>
      </WInput>

      <WInput
        wType="filled"
        inputType="password"
        labelText="test">
      </WInput>

      <WInput
        wType="outlined"
        inputType="number"
        labelText="test">
      </WInput>

      <WInput className="lined">
        <span class="bar-center-out"></span>
        <label class="label-shrink">Lined label-shrink</label>
      </WInput>

      <WInput className="lined">
        <span class="bar-center-out"></span>
        <label class="label-up">Lined label-up</label>
      </WInput>

      <WInput className="lined">
        <span class="bar-center-out"></span>
        <label class="label-fixed">Lined label-fixed</label>
      </WInput>

      <WInput className="lined">
        <span class="bar-center-out"></span>
        <label class="label-fixed-shrink">Lined label-fixed-shrink</label>
      </WInput>

      <WInput className="filled">
        <span class="bar-center-out"></span>
        <label class="label-shrink">Filled label-shrink</label>
      </WInput>

      <WInput className="filled">
        <span class="bar-center-out"></span>
        <label class="label-up">Filled label-up</label>
      </WInput>

      <WInput className="filled">
        <span class="bar-center-out"></span>
        <label class="label-fixed">Filled label-fixed</label>
      </WInput>

      <WInput className="filled">
        <span class="bar-center-out"></span>
        <label class="label-fixed-shrink">Filled label-fixed-shrink</label>
      </WInput>

    </div>
  );
}
