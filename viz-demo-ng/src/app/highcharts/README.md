# Highcharts.JS

Open Water Foundation is utilizing Highcharts.JS in order to test different visualizations for time series and spatial data in Angular.

**Highcharts** is an open source, multi-platform charting library written in JavaScript. Highcharts supports line, spline, area, areaspline, *column*, *bar*, *pie*, scatter, gauge, arearange, areasplinerange and columnrange chart types, This library enhances web applications through interactive charting capabilities. 

**Library Documentation:**  

* [**HighchartsJS**](https://www.highcharts.com/docs/index)

**Open Water Foundation demonstration of chart.js library:**  [OpenWaterFoundation/owf-lib-viz-highcharts-js](https://github.com/OpenWaterFoundation/owf-lib-viz-highcharts-js)



## Installation 

To install Highcharts as a node module and save it as a dependency within package.json use npm:

```
npm install highcharts --save
```



## Understanding Highcharts.JS

 Below are some basic elements to how the Highcharts library functions. For more details check the [official API documentation](https://api.highcharts.com/highcharts/).

NOTE: In TypeScript the [type](https://api.highcharts.com/highcharts/series.line.type) option must always be set 

- **chart**: includes the chart type.
- **Title**: includes chart title.
- **Tooltip**: has the tooltip’s customizations.
- **Series: **  includes the data and categories of data. In this project, I am using normal and abnormal data generated from an AI (artificial intelligence data).

#### Configuration Options 

* **plotOptions** - Allows general options for all series types
* **series** - Allows specific options to be set for that specified series instance

Configuration options for the series are given in three levels:

1. Options for all series in a chart are defined in the [plotOptions.series](https://api.highcharts.com/highcharts/plotOptions.series) object.
2. Options for all `line` series are defined in [plotOptions.line](https://api.highcharts.com/highcharts/plotOptions.line).
3. Options for one single series are given in [the series instance array](https://api.highcharts.com/highcharts/series.line).

```
Highcharts.chart('container', {
    plotOptions: {
        series: {
            // general options for all series
        },
        line: {
            // shared options for all line series
        }
    },
    series: [{
        // specific options for this series instance
        type: 'line'
    }]
});
```

* connectNulls: boolean
  * Whether to connect a graph line across null points, or render a gap between the two points on either side of the nulls. Defaults to `false`.

## Example Descriptions

* **Generic 2D Line Chart Demo: Monthly TS Data**
  * This  demo builds a basic 2D line chart, and intends to show you the general concepts behind  Highcharts using monthly TS Data.
* **SNODAS Line Chart Demo: Daily TS Data**
  * This example takes in data from a csv format  and builds a SNODAS Volume Graph utilizing daily time series data.
* **TSTool Graph Configuration Demo: Monthly TS Data**
  * This example creates a graph by mapping TSTool graph configurations using Highcharts and monthly TS Data.
* **Generic Heatmap Demo**
  * This demo depicts a basic heatmap example. Future time series  heatmap examples will be added.

