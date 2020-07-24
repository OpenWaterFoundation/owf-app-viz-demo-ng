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

**To actually build a Plotly chart there are 3 basic variables that you will need to be aware of.**

* First there we have the ``element`` which is HTML element that will be replaced by the chart. 

* Then there is the ``data`` which is actual data that is going to be displayed in the chart. 

* The third variable is ``style`` or ``layout`` which defines the style options that vary from chart to chart. 

To put everything together you simply call:

* <code>Plotly.plot(element, data, style) </code>

### Graph Configuration options

The plotly.js `config` argument sets properties like the mode bar buttons and the interactivity in the chart. It's the last argument in `Plotly.plot` calls.

Configuring data on the chart so that zoom is only enabled horizontally as seen in the TSTool Graph Configuration demo is made possible by adding in the following options, ``fixed range`` to the y axis. See below a the simple example:

```
Plotly.plot('graph', [{
  y: [2,1,2]
}], {
  yaxis: {
    fixedrange: true
  },
}, {
  scrollZoom: true
})

```

The plotly examples present already use configuration options such as ``Editable Mode``. Editable mode allows users the ability to edit the chart title, axis labels and trace names in the legend. 

```
var trace1 = {
  x: [0, 1, 2, 3, 4],
  y: [1, 5, 3, 7, 5],
  mode: 'lines+markers',
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4, 5],
  y: [4, 0, 4, 6, 8],
  mode: 'lines+markers',
  type: 'scatter'
};

var data = [trace1, trace2];
var layout = {title: 'Click Here<br>to Edit Chart Title'};

Plotly.newPlot('myDiv', data, layout, {editable: true});

```

Ploty graphs also present themselves with default modebar options along the top of the graph. By default, the `modebar` is only visible while the user is hovering over the chart. This modebar can be forced to always be visible, never be visible, and or even have some of the options removes. 

To configure the chart to have the `modebar` to always be visible regardless of whether or not the user is currently hovering over the figure, set the `displayModeBar` attribute in the `config` of your figure to `true`.

```
var data = [{
    y:['Marc', 'Henrietta', 'Jean', 'Claude', 'Jeffrey', 'Jonathan', 'Jennifer', 'Zacharias'], 
      x: [90, 40, 60, 80, 75, 92, 87, 73],
      type: 'bar',
      orientation: 'h'}]

var layout = {
    title: 'Always Display the Modebar',
    showlegend: false}

Plotly.newPlot('myDiv', data, layout, {displayModeBar: true})
```



To never display the modebar:

Set the `displayModeBar` attribute in the `config` of your figure to `false`.

```
var trace1 = {
    x:['Zebras', 'Lions', 'Pelicans'],
    y: [90, 40, 60],
    type: 'bar',
    name: 'New York Zoo'
};

var trace2 = {
    x:['Zebras', 'Lions', 'Pelicans'],
    y: [10, 80, 45],
    type: 'bar',
    name: 'San Francisco Zoo'
};

var data = [trace1, trace2];

var layout = {
    title: 'Hide the Modebar',
    showlegend: true
};

Plotly.newPlot('myDiv', data, layout, {displayModeBar: false});
```

And to remove certain Modebar options, pass an array of strings containing the names of the buttons you want to remove to the `modeBarButtonsToRemove` attribute in the figure's configuration object.

```
var data = [{
    x:['trees', 'flowers', 'hedges'], 
    y: [90, 130, 40],
    type: 'bar'}]

var layout = {
    title: 'Remove Modebar Buttons',
    showlegend: false}

Plotly.newPlot('myDiv', data, layout, {modeBarButtonsToRemove: ['toImage']})
```

The following is a list of the modebar options and chart types they are associated with:

- -'2D', `zoom2d`, `pan2d`, `select2d`, `lasso2d`, `zoomIn2d`, `zoomOut2d`, `autoScale2d`, `resetScale2d`
- -'3D', `zoom3d`, `pan3d`, `orbitRotation`, `tableRotation`, `handleDrag3d`, `resetCameraDefault3d`, `resetCameraLastSave3d`, `hoverClosest3d`
- -'Cartesian', `hoverClosestCartesian`, `hoverCompareCartesian`
- -'Geo', `zoomInGeo`, `zoomOutGeo`, `resetGeo`, `hoverClosestGeo`
- -'Other', `hoverClosestGl2d`, `hoverClosestPie`, `toggleHover`, `resetViews`, `toImage`, `sendDataToCloud`, `toggleSpikelines`, `resetViewMapbox`

Tp view the full list of configuration options refer to the [plotly.js source code on GitHub ](https://github.com/plotly/plotly.js/blob/master/src/plot_api/plot_config.js#L22-L86).

## Example Descriptions

* **Generic 2D Line Chart Demo: Monthly TS Data**
  * This  demo builds a basic 2D line chart, and intends to show you the general concepts behind  Plotly using monthly TS Data.
* **SNODAS Line Chart Demo: Daily TS Data**
  * This example takes in data from a csv format  and builds a SNODAS Volume Graph utilizing monthly time series data.
* **TSTool Graph Configuration Demo: Monthly TS Data**
  * This demo creates a graph by mapping TSTool graph configurations using PlotlyJS and monthly TS Data.
* **Generic Heatmap Demo**
  * This demo depicts a basic heatmap example. Future time series  heatmap examples will be added.



