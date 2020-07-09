# Plotly.JS 

Open Water Foundation is utilizing Plotly.JS in order to test different visualizations for time series and spatial data in Angular.

**Plotly.js** is a high-level, declarative charting library, free and open-source. Plotly.js ships with over 40 chart types, including 3D charts, statistical graphs, and SVG . This library abstracts the types of statistical and scientific charts that you would find in packages like matplotlib, ggplot2, or MATLAB.

## Installation

You can download the latest version of PlotlyJS from the [Getting Started guide](https://plotly.com/javascript/getting-started/) for the latest installation or upgrade instructions. Detailed installation instructions can be found on Plotly's [Getting Started](https://plotly.com/javascript/getting-started/) page.

#### Download:

Download the minified PlotlyJS source code and dependencies at [Plotly.com](https://plotly.com/javascript/getting-started/)

#### npm: 

```
$ npm intall plotly
```



## Understanding PlotlyJS

* The first step to create a plotly chart in angular will be to install the Plotly.js library.
  * We can do this with <code>npm install plotly.js --save</code> or through downloading the minified plotly.js source code and dependencies.
* Then include the downloaded scripts in your index.html document.
* Next in your typescript file add the plotly class so it is recognized in your file.
  *  <code> declare var Plotly:any; </code>

Now you can start building your first line chart!

## Example Descriptions

#### Generic 2D Line Chart Demo: Monthly TS Data 

This basic 2D line chart is completely static, and intends to show you the general concepts behind  Plotly. In the HTML you will want to create an empty div and then give it a template reference name  preferably named ``chart``. This will serve as the the anchor point for where the chart will be generated.

To actually build a Plotly chart there are 3 basic variables that you will need to be aware of.

* First there we have the element which is HTML element that will be replaced by the chart. 

* Then there is the data which is actual data that is going to be displayed in the chart. 

* The third variable is style which defines the style options that vary from chart to chart. 

To put everything together you simply call:

* <code>Plotly.plot(element, data, style) </code>

#### SNODAS Line Chart Demo: Daily TS Data

This example builds a SNODAS Volume Graph utilizing monthly time series data.

The SNODAS Volume Graph example uses daily data rom the [National Operational Hydrologic Remote Sensing Center (NOHRSC)](https://www.nohrsc.noaa.gov/interactive/html/map.html) are processed daily to calculate Snow Water Equivalent (SWE) and Snow Coverage statistics for water supply basins in Colorado.

This basic SNODAS hart is completely static, and intends to show you the general concepts behind Plotly.JS. This example takes in data from a csv format. In the HTML you will want to create an empty div and then give it a template reference named chart. This will serve as the the anchor point for where the chart will be generated.

##### Demo Data:

#### TSTool Graph Configuration Demo: Monthly TS Data



##### Demo Data: 

