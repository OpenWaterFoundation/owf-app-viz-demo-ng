# Plotly.JS 

Plotly.js is a high-level, declarative charting library, free and open-source. Plotly.js ships with over 40 chart types, including 3D charts, statistical graphs, and SVG .

## Understanding Plotly

* The first step to create a plotly chart in angular will be to install the Plotly.js library.
  * We can do this with <code>npm install plotly.js --save</code> or through downloading the minified plotly.js source code and dependencies.
* Then include the downloaded scripts in your index.html document.
* Next in your typescript file add the plotly class so it is recognized in your file.
  *  <code> declare var Plotly:any; </code>

Now you can start building your first line chart!

#### Generic Plotly Chart Example 

This basic 2D line chart is completely static, and intends to show you the general concepts behind  Plotly. In the HTML you will want to create an empty div and then give it a template reference name chart. This will serve as the the anchor point for where the chart will be generated.

To actually build a Plotly chart there are 3 basic variable that you will need to be aware of.

* First there we have the element which is HTML element that will be replaced by the chart. 

* Then there is the data which is actual data that is going to be displayed in the chart. 

* The third variable is style which defines the style options that vary from chart to chart. 

To put everything together you simply call:

* <code>Plotly.plot(element, data, style) </code>

