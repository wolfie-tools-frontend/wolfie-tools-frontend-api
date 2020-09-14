import React from "react";
import WInput from "../components/winput/WInput";
import "./example.css";
import "../main.scss";

export default function WInputPage() {
  return (
    <div className="WInputPage">
      <h1>WInput</h1>

      <WInput className="lined">
        <input type="text" required="required" />
        <span class="bar"></span>
        <label>Name lined B</label>
      </WInput>

      <WInput className="lined">
        <input type="text" required="required" />
        <label>Name lined no bar</label>
      </WInput>

      <WInput className="lined">
        <input type="password" required="required" />
        <span class="bar"></span>
        <label>Password lined B</label>
      </WInput>

      <WInput className="lined">
        <input type="number" required="required" />
        <span class="bar"></span>
        <label>Number lined B</label>
      </WInput>

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
        <input type="text" required="required" />
        <span class="bar"></span>
        <label>Lined B</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required" />
        <span class="bar"></span>
        <label>Filled B</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required" />
        <span class="bar3"></span>
        <label>animation3 filled B3</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required" />
        <span class="bar2"></span>
        <label>animation2 filled B2</label>
      </WInput>

      <WInput className="lined">
        <input type="text" required="required" />
        <span class="bar2"></span>
        <label>animation2 lined B2</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required" />
        <span class="bar"></span>
      </WInput>

      <WInput className="lined">
        <input type="text" required="required" />
        <span class="bar"></span>
      </WInput>

    </div>
  );
}
