import React from "react";
import WButton from "../components/wbutton/WButton";
import "./example.css";
import "../main.scss";

export default function WButtonPage() {
  function myFunction() {
    alert("I am an alert box!");
  }

  return (
    <div className="WButtonPage">
      <h1>WButton</h1>
      
      <h2>Types</h2>
      <table>
        <tbody>
          <tr>
            <td>Default Primary</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
          
          <tr>
            <td>Ghost</td>
            <td>
              <WButton
                btnType="ghost"
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Texted</td>
            <td>
              <WButton
                btnType="texted"
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Transparent</td>
            <td>
              <WButton
                btnType="transparent"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fancy-buttons">
        <WButton
          btnType="ghost"
          color="accent"
          shape="rounded"
          hoverAnimation="fill"
          clickAnimation="ripple-light"
          >
          Ghost
        </WButton>
        <WButton
          btnType="texted"
          color="accent"
          shape="pill"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
          >
          Texted
        </WButton>
        <WButton
          btnType="transparent"
          shape="pill"
          hoverAnimation="lighten"
          clickAnimation="ripple-light"
          >
          Transparent
        </WButton>
      </div>
      
      <h2>Shapes</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
          
          <tr>
            <td>Rounded</td>
            <td>
              <WButton
                btnType="rounded"
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Pill</td>
            <td>
              <WButton
                btnType="pill"
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Circle</td>
            <td>
              <WButton
                shape="circle"
                color="primary"
                onClick={myFunction}
              >
                <i className="material-icons medium">cake</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Square</td>
            <td>
              <WButton
                shape="square"
                color="primary"
                onClick={myFunction}
              >
                <i className="material-icons medium">cake</i>
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fancy-buttons">
        <WButton
          shape="rounded"
          type="transparent"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
          >
          Rounded
        </WButton>
        <WButton
          shape="pill"
          type="ghost"
          color="accent"
          hoverAnimation="fill"
          clickAnimation="ripple-light"
          >
          Pill
        </WButton>
        <WButton
          shape="square"
          color="danger"
          clickAnimation="ripple-light"
          >
          <i className="material-icons medium">delete</i>
        </WButton>
        <WButton
          shape="circle"
          type="ghost"
          color="colored"
          hoverAnimation="darken"
          clickAnimation="ripple-dark"
          >
          <i className="material-icons medium">arrow_forward_ios</i>
        </WButton>
      </div>

      <h2>Color</h2>
      <table>
        <tbody>
         <tr>
            <td>Default</td>
            <td>
              <WButton
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Primary</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
          
          <tr>
            <td>Accent</td>
            <td>
              <WButton
                color="accent"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Colored</td>
            <td>
              <WButton
                color="colored"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Success</td>
            <td>
              <WButton
                color="success"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Danger</td>
            <td>
              <WButton
                color="danger"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Warning</td>
            <td>
              <WButton
                color="warning"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Custom</td>
            <td>
              <WButton
                color="custom-color"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fancy-buttons">
        <WButton
          btnType="ghost"
          shape="rounded"
          color="primary"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
          >
          Primary
        </WButton>
        <WButton
          btnType="ghost"
          shape="rounded"
          color="accent"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
          >
          Accent
        </WButton>
        <WButton
          color="success"
          shape="rounded"
          hoverAnimation="lighten"
          clickAnimation="ripple-light"
          >
          Success
        </WButton>
        <WButton
          shape="pill"
          color="danger"
          hoverAnimation="darken"
          clickAnimation="ripple-dark"
          >
          Danger
        </WButton>
        <WButton
          shape="pill"
          color="warning"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
          >
          Warning
        </WButton>
      </div>

      <h2>Size</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
          
          <tr>
            <td>Small</td>
            <td>
              <WButton
                size="small"
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Medium</td>
            <td>
              <WButton
                size="medium"
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Large</td>
            <td>
              <WButton
                size="large"
                color="primary"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fancy-buttons">
        <WButton
          size="small"
          btnType="ghost"
          color="danger"
          shape="rounded"
          hoverAnimation="fill"
          clickAnimation="ripple-light"
          >
          Small
        </WButton>
        <WButton
          shape="rounded"
          color="colored"
          hoverAnimation="lighten"
          clickAnimation="ripple-light"
          >
          Medium
        </WButton>
        <WButton
          size="large"
          color="accent"
          shape="rounded"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
          >
          Large
        </WButton>
      </div>

      <h2>Icons</h2>
      <table>
        <tbody>
          <tr>
            <td>Default</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                <i className="material-icons">cake</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Small</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                <i className="material-icons small">cake</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Medium</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                <i className="material-icons medium">cake</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Large</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                <i className="material-icons large">cake</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Left Align</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                <i className="material-icons left">cake</i>
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Center Align</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                Button
                <i className="material-icons center">cake</i>
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Right Align</td>
            <td>
              <WButton
                color="primary"
                onClick={myFunction}
              >
                Button
                <i className="material-icons right">cake</i>
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fancy-buttons">
        <WButton
          size="large"
          shape="circle"
          btnType="texted"
          color="accent"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
          >
          <i class="fab fa-github" style={{fontSize: "2.2rem"}}/>
        </WButton>
        <WButton
          shape="rounded"
          size="small"
          color="success"
          hoverAnimation="lighten"
          clickAnimation="ripple-light"
          >
          <i className="material-icons left small">add</i>
          Add
        </WButton>
        <WButton
          shape="rounded"
          btnType="ghost"
          color="colored"
          hoverAnimation="darken"
          clickAnimation="ripple-dark"
          >
            Edit
            <i className="material-icons right">edit</i>
        </WButton>
      </div>

      <h2>Animations</h2>
      <h3>Hovers</h3>
      <table>
        <tbody>
          <tr>
            <td>Hover-darken</td>
            <td>
              <div className="stacked">
                <WButton
                  color="primary"
                  hoverAnimation="darken"
                  onClick={myFunction}
                >
                  Button
                </WButton>

                <WButton
                  btnType="ghost"
                  color="primary"
                  hoverAnimation="darken"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>Hover-lighten</td>
            <td>
              <WButton
                color="primary"
                hoverAnimation="lighten"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Hover-fill</td>
            <td>
              <WButton
                color="primary"
                hoverAnimation="fill"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Hover-transparent-darken</td>
            <td>
              <WButton
                color="primary"
                btnType="texted"
                hoverAnimation="transparent-darken"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Hover-transparent-lighten</td>
            <td>
              <WButton
                color="primary"
                btnType="texted"
                hoverAnimation="transparent-lighten"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Hover-transparent-colored</td>
            <td>
              <WButton
                color="primary"
                btnType="texted"
                hoverAnimation="transparent-colored"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fancy-buttons">

      </div>
      <h3>Click</h3>
      <table>
        <tbody>
          <tr>
            <td>Ripple-dark</td>
            <td>
              <WButton 
                color="primary"
                clickAnimation="ripple-dark"
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Ripple-light</td>
            <td>
              <WButton 
              color="primary"
              clickAnimation="ripple-light"
              >
                Button
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="fancy-buttons">

      </div>

      <br></br><br></br><br></br>

<br/><br/>

      <h2>Examples</h2>
      <table>
        <tbody>

          <tr>
            <td>Primary Small Hover-darken</td>
            <td>
              <WButton
                color="primary"
                size="small"
                hoverAnimation="darken"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Primary Raised Hover-lighten</td>
            <td>
              <WButton 
                shadow="raised"
                color="primary"
                hoverAnimation="lighten"
              >
                Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Accent Raised Hover-darken</td>
            <td>
              <WButton 
                shadow="raised"
                size="large"
                color="accent"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Danger Raised</td>
            <td>
              <WButton 
                shadow="raised"
                size="large"
                color="danger"
              >
                Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Success Raised Hover-lighten</td>
            <td>
              <WButton 
                shadow="raised"
                size="large"
                color="success"
                hoverAnimation="lighten"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Warning Raised</td>
            <td>
              <WButton 
                shadow="raised"
                size="large"
                color="warning"
              >
                Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Large Colored Raised</td>
            <td>
              <WButton 
                shadow="raised"
                size="large"
                color="colored"
              >Button</WButton>
            </td>
          </tr>

          <tr>
            <td>Disabled Texted</td>
            <td>
              <WButton 
                color="accent"
                btnType="texted"
                hoverAnimation="darken"
                disabled
              >
                <i className="material-icons">favorite</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Ghost Primary Rounded Hover-darken Ripple-light</td>
            <td>
              <WButton 
                btnType="ghost"
                color="primary"
                shape="rounded"
                hoverAnimation="darken"
                clickAnimation="ripple-light"
              >
                <i className="material-icons medium left">thumb_up</i>
                Like
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Ghost Danger Rounded Hover-darken Ripple-dark</td>
            <td>
              <WButton 
                btnType="ghost"
                color="danger"
                shape="rounded"
                hoverAnimation="darken"
                clickAnimation="ripple-dark"
              >
                <i className="material-icons medium left">favorite</i>
                Button
                <i className="material-icons medium right">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Success Pill Hover-lighten Ripple-light</td>
            <td>
              <WButton 
                color="success"
                shape="pill"
                hoverAnimation="lighten"
                clickAnimation="ripple-light"
              >
                <i className="material-icons small">check</i>
                <i className="material-icons large">shopping_cart</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Small Icon Circle Accent Hover-darken</td>
            <td>
              <WButton 
                color="accent"
                shape="circle"
                hoverAnimation="darken"
              >
                <i className="material-icons small">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Icon Circle Hover-lighten</td>
            <td>
              <WButton 
                color="accent"
                shape="circle"
                hoverAnimation="lighten"
              >
                <i className="material-icons medium">favorite</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Raised Icon Circle Hover-darken</td>
            <td>
              <WButton 
                color="accent"
                shadow="raised"
                shape="circle"
                hoverAnimation="darken"
              >
                <i className="material-icons large">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Small Icon Raised Square Primary</td>
            <td>
              <WButton 
                color="primary"
                shape="square"
                shadow="raised"
              >
                <i className="material-icons small">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Icon Square Primary Hover-lighten</td>
            <td>
              <WButton 
                color="primary"
                shape="square"
                hoverAnimation="lighten"
              >
                <i className="material-icons medium">verified</i>
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Icon Square Hover-darken</td>
            <td>
              <WButton 
                color="primary"
                shape="square"
                hoverAnimation="darken"
              >
                <i className="material-icons large">verified</i>
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Medium Pill Colored</td>
            <td>
              <WButton 
                color="colored"
                shape="pill"
                size="medium"
              >
                Button</WButton>
            </td>
          </tr>

          <tr>
            <td>Large Ghost Colored Hover-lighten</td>
            <td>
              <WButton 
                size="large"
                btnType="ghost"
                color="colored"
                hoverAnimation="lighten"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Colored Hover-darken</td>
            <td>
              <WButton 
                size="large"
                btnType="ghost"
                color="colored"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Primary Ghost Hover-fill</td>
            <td>
            <WButton 
                size="large"
                btnType="ghost"
                color="primary"
                hoverAnimation="fill"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Warning Hover-transparent-darken</td>
            <td>
              <WButton 
                size="large"
                btnType="ghost"
                color="warning"
                hoverAnimation="transparent-darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Large Ghost Warning Hover-darken</td>
            <td>
              <WButton 
                size="large"
                btnType="ghost"
                color="warning"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Accent Ghost Hover-lighten</td>
            <td>
              <WButton 
                btnType="ghost"
                color="accent"
                hoverAnimation="lighten"
              >
                Button</WButton>
            </td>
          </tr>
          <tr>
            <td>Medium Rounded Ghost Success Hover-darken</td>
            <td>
              <WButton 
                size="medium"
                shape="rounded"
                btnType="ghost"
                color="success"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Small Rounded Danger Ghost Hover-fill</td>
            <td>
              <WButton 
                size="small"
                shape="rounded"
                btnType="ghost"
                color="danger"
                hoverAnimation="fill"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Disabled Ghost</td>
            <td>
              <WButton 
                size="medium"
                btnType="ghost"
                color="accent"
                disabled
              >
                Button</WButton>
            </td>
          </tr>

          <tr>
            <td>Transparent Pill Hover-darken</td>
            <td>
              <WButton 
                size="medium"
                btnType="transparent"
                shape="pill"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Transparent Pill Hover-lighten</td>
            <td>
              <WButton 
                size="medium"
                btnType="transparent"
                shape="pill"
                hoverAnimation="lighten"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Disabled Transparent Pilln</td>
            <td>
              <WButton 
                size="medium"
                btnType="transparent"
                shape="pill"
                hoverAnimation="darken"
                disabled
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Texted Colored Hover-darken</td>
            <td>
              <WButton 
                color="colored"
                size="medium"
                btnType="texted"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Primary Hover-darken</td>
            <td>
              <WButton 
                color="primary"
                size="medium"
                btnType="texted"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Accent Hover-darken</td>
            <td>
              <WButton 
                color="accent"
                size="medium"
                btnType="texted"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Danger Hover-darken</td>
            <td>
              <WButton 
                color="danger"
                size="medium"
                btnType="texted"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Warning Hover-lighten </td>
            <td>
             <WButton 
                color="warning"
                size="medium"
                btnType="texted"
                hoverAnimation="lighten"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Warning Hover-transparent-lighten </td>
            <td>
              <WButton 
                color="warning"
                size="medium"
                btnType="texted"
                hoverAnimation="transparent-lighten"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Warning Hover-darken </td>
            <td>
              <WButton 
                color="warning"
                size="medium"
                btnType="texted"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Success Hover-darken</td>
            <td>
              <WButton 
                color="success"
                size="medium"
                btnType="texted"
                hoverAnimation="darken"
              >
                Button
              </WButton>
            </td>
          </tr>
          <tr>
            <td>Texted Disabled</td>
            <td>
              <WButton 
                size="medium"
                btnType="texted"
                hoverAnimation="darken"
                disabled
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Custom Colors</td>
            <td>
              <WButton
                style={{ backgroundColor: "violet" }}
                size="small"
                shape="pill"
                clickAnimation="ripple-light"
              >
                B1
              </WButton>
              <WButton 
                size="small"
                shape="pill"
                color="red-green"
                clickAnimation="ripple-light"
              >
                B2
              </WButton>
              <WButton
                size="small"
                shape="pill"
                clickAnimation="ripple-dark"
                style={{ color: "violet" }}
              >
                B3
              </WButton>
            </td>
          </tr>
        </tbody>
      </table>
      <WButton 
        size="large"
        color="warning"
        shape="pill"
        clickAnimation="ripple-dark"
        span
      >
        Span Button
        <i className="material-icons right">anchor</i>
      </WButton>
    </div>
  );
}
