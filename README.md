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

Documentation: https://tinyurl.com/wt-frontend-docs

Email: wolfietools.frontend@gmail.com











