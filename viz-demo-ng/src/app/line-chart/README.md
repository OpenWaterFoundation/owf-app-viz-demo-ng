# Chart.JS

Open Water Foundation is utilizing Chart.JS in order to test different visualizations for time series and spatial data in Angular.

**Chart.js** is a free open-source JavaScript library for data visualization, which supports 8 chart types: bar, line, area, pie (doughnut), bubble, radar, polar, and scatter.

Chart.js renders in HTML5 canvas and is widely covered as one of the best data visualization libraries

## Installation

You can download the latest version of Chart.js from the [GitHub releases](https://github.com/chartjs/Chart.js/releases/latest) or use a [Chart.js CDN](https://www.jsdelivr.com/package/npm/chart.js). Detailed installation instructions can be found on the [installation](https://www.chartjs.org/docs/latest/getting-started/installation.html) page.

#### npm:

``` $ npm install chart.js --save ``` 

## Understanding ChartJS 

All that's required is the script included in your page along with a single `<canvas>` tag in order to render the chart.

## Example Descriptions

#### Generic ChartJS Demo: Line Chart

This basic 2D line chart is completely static, and intends to show you the general concepts behind  ChartJS. 

#### SNODAS Line Chart Demo: Daily TS Data

This example builds a SNODAS Volume Graph utilizing monthly time series data.

The SNODAS Volume Graph example uses daily data rom the [National Operational Hydrologic Remote Sensing Center (NOHRSC)](https://www.nohrsc.noaa.gov/interactive/html/map.html) are processed daily to calculate Snow Water Equivalent (SWE) and Snow Coverage statistics for water supply basins in Colorado.

This basic SNODAS hart is completely static, and intends to show you the general concepts behind ChartJS. This example takes in data from a csv format. In the HTML you will want to create an empty div and then give it a template reference named chart. This will serve as the the anchor point for where the chart will be generated.

The graph displayed for this demo displays the 

##### Demo Data:



#### TSTool Graph Configuration Demo: Monthly TS Data

##### Demo Data:

