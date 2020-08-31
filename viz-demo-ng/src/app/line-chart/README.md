# Chart.JS

Open Water Foundation is utilizing **Chart.JS**  along with **ng2-charts** in order to test different visualizations for time series and spatial data in Angular.

**Chart.js** is a free open-source JavaScript library for data visualization, which supports 8 chart types: bar, line, area, pie (doughnut), bubble, radar, polar, and scatter.

**ng2-charts**  is an open-source JavaScript Library that provides baseChart directives which can be applied to an HTML canvas element and is built exclusively for Angular2+. 

Chart.js renders in HTML5 canvas and is widely covered as one of the best data visualization libraries

**Library Documentation:** 

* [**Chart.JS**](https://www.chartjs.org/)
* [**ng2-charts**](https://www.npmjs.com/package/ng2-charts)

**Open Water Foundation demonstration of chart.js library:**  [OpenWaterFoundation/owf-lib-chart-js](https://github.com/OpenWaterFoundation/owf-lib-viz-chart-js)   

## Installation

You can download the latest version of Chart.js from the [GitHub releases](https://github.com/chartjs/Chart.js/releases/latest) or use a [Chart.js CDN](https://www.jsdelivr.com/package/npm/chart.js). Detailed installation instructions can be found on the [installation](https://www.chartjs.org/docs/latest/getting-started/installation.html) page.

#### npm:

``` $ npm install chart.js --save ``` 

## Understanding ChartJS 

All that's required is the script included in your page along with a single `<canvas>` tag in order to render the chart.

## Example Descriptions

* **Generic 2D Line Chart Demo: Monthly TS Data**
  * This  demo builds a basic 2D line chart, and intends to show you the general concepts behind  ChartJS using monthly TS Data.
* **SNODAS Line Chart Demo: Daily TS Data**
  * This example takes in data from a csv format  and builds a SNODAS Volume Graph utilizing daily time series data.
* **TSTool Graph Configuration Demo: Monthly TS Data**
  * This example creates a graph by mapping TSTool graph configurations using ChartJS and monthly TS Data.

##### 

