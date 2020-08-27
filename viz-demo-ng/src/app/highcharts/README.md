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

- **chart**: includes the chart type.
- **Title**: includes chart title.
- **Tooltip**: has the tooltip’s customizations.
- **Series: **  includes the data and categories of data. In this project, I am using normal and abnormal data generated from an AI (artificial intelligence data).