import React from "react";
import WInput from "../components/winput/WInput";
import "./example.css";
import "../main.scss";

export default function WInputPage() {
  return (
    <div className="WInputPage">
      <h1>WInput</h1>

      <WInput className="lined draw">
        <input type="text" required="required"/>
        <span class="bar"></span>
        <label>Name</label>
      </WInput>

      <WInput className="lined draw">
        <input type="text" required="required"/>
        <label>Name no bar</label>
      </WInput>

      <WInput className="lined">
          <input type="password" required="required"/>
          <span class="bar"></span>
          <label>Password</label>
      </WInput>

      <WInput className="lined">
        <input type="number" required="required"/>
        <span class="bar"></span>
        <label>Number</label>
      </WInput>

      <WInput className="outlined">
        <fieldset>
            <input type="text" required="required"/>
            <label>Outlined</label>
            <legend>Outlined</legend>
        </fieldset>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label2" required="required"/>
        <span class="barOutlined"></span>
        <label>OutlinedLabel2</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label3" required="required"/>
        <span class="barOutlined"></span>
        <label>OutlinedLabel3</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="color-background" required="required"/>
        <span class="barOutlined"></span>
        <label>OutlinedColored</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="pill label3" required="required"/>
        <span class="barOutlined"></span>
        <label>OutlinedPill</label>
      </WInput>
      
      <WInput className="outlined">
        <input type="text" className="color-background label3 shadow" required="required"/>
        <span class="barOutlined"></span>
        <label>OutlinedColored Shadow</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="pill label3 hover-shadow" required="required"/>

        <label>OutlinedPill HoverShadow</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label4" required="required"/>
        <span class="barOutlined"></span>
        <label>OutlinedLabel4</label>
      </WInput>

      <WInput className="outlined">
        <input type="text" className="label4 hover-border-highlight" required="required"/>
        <label>Outlined HoverBorderHighlight</label>
      </WInput>

      <WInput className="lined">
        <input type="text" required="required"/>
        <span class="bar"></span>
        <label>Lined</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required"/>
        <span class="bar"></span>
        <label>Filled</label>
      </WInput>
      
      <WInput className="filled">
        <input type="text" required="required"/>
        <span class="bar3"></span>
        <label>animation3</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required"/>
        <span class="bar2"></span>
        <label>animation2</label>
      </WInput>

      <WInput className="lined">
        <input type="text" required="required"/>
        <span class="bar2"></span>
        <label>animation2</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required"/>
        <span class="bar"></span>
      </WInput>

      <WInput className="lined">
        <input type="text" required="required"/>
        <span class="bar"></span>
      </WInput>

    </div>
  );
}
