## How to Set Up (temporary until npm)

1. Navigate to the directory of the site you are creating.

  * For VIP, this would be the client/src folder of the backend team’s template.

2. From our Github, copy the “src” folder into the directory (see [Note](#ex-note)).
  
3. In the terminal, you need to then `npm install clsx` and `npm install node-sass npm:sass@^1.26.10`.

* Double check the package.json file that the dependencies lists `"node-sass": "npm:sass@^1.26.10"` and not `"sass": "npm:sass@^1.26.10"`.

* If you see just “sass”, manually replace it with “node-sass”, delete package-lock.json and node-modules and do `npm install`.

4. If you want to use any of our built-in styling with your css, you need to change it to a “.scss” file and then put this at the top of the file (or whatever other location you placed our global folder): 

    ```css
    @use "./wt-frontend/global/wolfie.scss";
    ```

5. In the js file you want our components in, import the component you want. For example, if you wanted a button, you would put: 

    ```javascript
    import WButton from './src/components/wbutton/WButton';
    ```

<br/>

<a name="ex-note"></a>
Note: If you want to look at our example pages, copy in our entire directory. You can open the example pages by navigating to our directory, running `npm install` in the terminal, then `npm start`.

---

## Stylization ##
### Syntax ###

Our React Components can be called with

```JSX
<WComponentName>
    {children}
</WComponentName>
```

Components have defined props that apply style classes.
Example:

```JSX
<WButton 
  wType="ghost"
  color="accent"
  shape="rounded"
  hoverAnimation="fill"
  clickAnimation="ripple-light"
>
  Button Text
</WButton>
```

---

## Components ##

### WButton ###

#### Style ####

The default styling values are:

Style | SCSS variable | Value
----- | ------------- | -----
font-family | $button-font-family | inherit
font-weight | $button-font-weight | null
padding | $button-padding | 0.6em 1.2em
margin | $button-margin | 0px 0px 5px 0px
background-color | $button-background-color | #354856
color | $button-text-color | white
cursor | - | pointer
border | - | none
outline | - | none
font-size | map-get($button-sizes, medium) | "medium": 1rem
text-align | - | center
display | - | inline-flex
align-items | - | center

<br/>

The style prop values are:
<table>
    <td text-align="center"><b>Prop</b></td>
    <td text-align="center"><b>Value</b></td>
    <td text-align="center"><b>Description</b></td>
  </tr>
  <tr>
    <td rowspan="4">wType</td>
    <td>(default)</td>
    <td>Solid filled color</td>
  </tr>
  <tr>
    <td>ghost</td>
    <td>Outlined color</td>
  </tr>
  <tr>
    <td>texted</td>
    <td>Only text</td>
  </tr>
  <tr>
    <td>transparent</td>
    <td>Transparent filled color</td>
  </tr>

  <tr>
    <td rowspan="7">color</td>
    <td>(default)</td>
    <td>No color/white</td>
  </tr>
  <tr>
    <td>primary</td>
    <td>Theme's primary color</td>
  </tr>
  <tr>
    <td>accent</td>
    <td>Theme's accent color</td>
  </tr>
  <tr>
    <td>colored</td>
    <td>Theme’s button-background-color and button-text color</td>
  </tr><tr>
    <td>success</td>
    <td>Green</td>
  </tr>
  <tr>
    <td>danger</td>
    <td>Red</td>
  </tr>
  <tr>
    <td>warning</td>
    <td>Yellow</td>
  </tr>

  <tr>
    <td rowspan="5">shape</td>
    <td>(default)</td>
    <td>Square corners</td>
  </tr>
  <tr>
    <td>rounded</td>
    <td>Slightly rounded corners</td>
  </tr>
  <tr>
    <td>pill</td>
    <td>Fully rounded corners</td>
  </tr>
  <tr>
    <td>circle</td>
    <td>Circle for a single icon</td>
  </tr><tr>
    <td>square</td>
    <td>Square for a single icon</td>
  </tr>

  <tr>
    <td rowspan="4">size</td>
    <td>(default)</td>
    <td>medium(1rem)</td>
  </tr>
  <tr>
    <td>small</td>
    <td>0.9rem</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>1rem</td>
  </tr>
  <tr>
    <td>large</td>
    <td>1.25rem</td>
  </tr>

  <tr>
    <td rowspan="2">span</td>
    <td>(default)</td>
    <td>False</td>
  </tr>
  <tr>
    <td>True</td>
    <td>Width is same as parent container</td>
  </tr>

  <tr>
    <td rowspan="7">hoverAnimation</td>
    <td>(default)</td>
    <td>None</td>
  </tr>
  <tr>
    <td>darken</td>
    <td>Background/text color darkens</td>
  </tr>
  <tr>
    <td>lighten</td>
    <td>Background/text color lightens</td>
  </tr>
  <tr>
    <td>fill</td>
    <td>Background/text fills with color</td>
  </tr><tr>
    <td>transparent-darken</td>
    <td>Background darkens for transparent buttons</td>
  </tr>
  <tr>
    <td>transparent-lighten</td>
    <td>Background lightens for transparent buttons</td>
  </tr>
  <tr>
    <td>transparent-colored</td>
    <td>Background changes color for transparent buttons</td>
  </tr>

  <tr>
    <td rowspan="3">clickAnimation</td>
    <td>(default)</td>
    <td>None</td>
  </tr>
  <tr>
    <td>ripple-dark</td>
    <td>Creates a dark ripple</td>
  </tr>
  <tr>
    <td>ripple-light</td>
    <td>Creates a light ripple</td>
  </tr>

  <tr>
    <td rowspan="2">disabled</td>
    <td>(default)</td>
    <td>True(if prop is listed)</td>
  </tr>
  <tr>
    <td>True</td>
    <td>Button gets disabled styling</td>
  </tr>

  <tr>
    <td rowspan="2">shadowed</td>
    <td>(default)</td>
    <td>None</td>
  </tr>
  <tr>
    <td>raised</td>
    <td>Provides a small shadow for depth</td>
  </tr>

</table>











