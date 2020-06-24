# Generic Plotly Chart Example

**This example builds a basic 2D line chart utilizing time series data.** 

The first step to create a plotly chart in angular will be to install the plotly.js library:

* This can be done with <code>npm install plotly.js --save</code> or through downloading the minified

​        plotly.js source code and dependencies. 

Then include the downloaded scripts in your index.html document.

Next in your typescript file add the Plotly class so it is recognized in your file. 

* <code> declare var Plotly:any; </code>

Now you can start building your first  Plotly chart!

___________________________________________________

## Plotly Concepts

This basic 2D line chart is completely static, and intends to show you the general concepts behind Plotly.js. In the HTML create an empty div and provide this div with a template reference, in this instance it is provided the ID 'chart'. This will serve as the the anchor point for where the chart will be generated.

To actually build a plotly chart there are 3 basic variable that you will need to be aware of.

* First there is  ```element``` which is HTML element that will be replaced by the chart.
* Then there is the ```data``` which is actual data that is going to be displayed in the chart. 
* The third variable is ```style``` which defines the style options that vary from chart to chart. 

To put everything together you simply call:

    <code>Plotly.plot(element, data, style) </code>

A generic 2D line chart will then displayed in the div with the specified 'chart' reference. 

_________________________

### Displaying Plolty Chart Within a Modal Window:

**TODO:** 

 ```
<button style="margin-left: 3%;" mat-raised-button (click)="openDialog()">Basic Plotly Chart</button>
 ```





  

  

