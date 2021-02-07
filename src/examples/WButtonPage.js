import React from "react";
import WButton from "../components/wbutton/WButton";
import "./example.scss";
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
            <td>Default</td>
            <td>
              <WButton
                onClick={myFunction}
                id="hello"
                name="wolfie"
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Ghost</td>
            <td>
              <WButton
                wType="ghost"
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
                wType="texted"
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
                wType="transparent"
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
          wType="ghost"
          color="accent"
          shape="rounded"
          hoverAnimation="fill"
          clickAnimation="ripple-light"
        >
          Ghost
        </WButton>
        <WButton
          wType="texted"
          color="accent"
          shape="pill"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
        >
          Texted
        </WButton>
        <WButton
          wType="transparent"
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
                wType="rounded"
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
                wType="pill"
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
          wType="ghost"
          shape="rounded"
          color="primary"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
        >
          Primary
        </WButton>
        <WButton
          wType="ghost"
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
          wType="texted"
          color="accent"
          hoverAnimation="darken"
          clickAnimation="ripple-light"
        >
          <i class="fab fa-github" style={{ fontSize: "2.2rem" }} />
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
          wType="ghost"
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
                  wType="ghost"
                  color="primary"
                  hoverAnimation="darken"
                  onClick={myFunction}
                >
                  Button
                </WButton>

                <WButton
                  wType="texted"
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
              <div className="stacked">
                <WButton
                  color="primary"
                  hoverAnimation="lighten"
                  onClick={myFunction}
                >
                  Button
                </WButton>

                <WButton
                  wType="ghost"
                  color="primary"
                  hoverAnimation="lighten"
                  onClick={myFunction}
                >
                  Button
                </WButton>

                <WButton
                  wType="texted"
                  color="primary"
                  hoverAnimation="lighten"
                  onClick={myFunction}
                >
                  Button
                </WButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>Hover-fill</td>
            <td>
              <WButton
                wType="ghost"
                hoverAnimation="fill"
                onClick={myFunction}
              >
                Button
              </WButton>
            </td>
          </tr>

          <tr>
            <td>Hover-transparent-colored</td>
            <td>
              <div className="stacked">
                <WButton
                  color="primary"
                  wType="ghost"
                  hoverAnimation="transparent-colored"
                  onClick={myFunction}
                >
                  Button
              </WButton>
                <WButton
                  color="primary"
                  wType="texted"
                  hoverAnimation="transparent-colored"
                  onClick={myFunction}
                >
                  Button
              </WButton>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
      
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

      <br></br>

    </div>
  );
}
