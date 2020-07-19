import React from "react";
import WInput from "../components/winput/WInput";
import "./example.css";
import "../main.scss";

export default function WInputPage() {
  return (
    <div className="WInputPage">
      <h1>WInput</h1>
      
      <WInput className="lined">
        <input type="text" id="honk" ></input>
        <label for="honk">LABEL HORF</label>
      </WInput>
      
      <WInput className="lined">
        <input type="text" required="required"/>
        <span class="bar"></span>
        <label>Name</label>
      </WInput>

      <WInput className="lined">
        <input type="password" required="required"/>
        <span class="bar"></span>
        <label>Password</label>
      </WInput>

      <WInput className="lined">
        <input type="number" required="required"/>
        <span class="bar"></span>
        <label>Number(is always up)</label>
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
        <label>bar3</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required"/>
        <span class="bar"></span>
        <label>bar</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required"/>
        <span class="bar2"></span>
        <label>bar2</label>
      </WInput>

      <WInput className="lined">
        <input type="text" required="required"/>
        <span class="bar2"></span>
        <label>bar2</label>
      </WInput>

      <WInput className="filled">
        <input type="text" required="required"/>
        <span class="bar2"></span>
        <label>bar2</label>
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
