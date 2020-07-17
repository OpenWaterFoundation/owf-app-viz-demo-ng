# SNODAS Line Chart Demo: Daily TS Data

This example builds a SNODAS Volume Graph utilizing monthly time series data.

The SNODAS Volume Graph example uses daily data from the [National Operational Hydrologic Remote Sensing Center (NOHRSC)](https://www.nohrsc.noaa.gov/interactive/html/map.html) which are processed daily to calculate Snow Water Equivalent (SWE) and Snow Coverage statistics for water supply basins in Colorado.

This basic SNODAS chart is completely static, and intends to show you the general concepts behind Plotly.JS. 

## SNODAS Plotly Chart: General Concepts 

To actually build a Plotly chart there are 3 basic variables that you will need to be aware of.

* First there we have the ``element`` which is HTML element that will be replaced by the chart. 

* Then there is the ``data`` which is actual data that is going to be displayed in the chart. 

* The third variable is ``style``/``layout`` which defines the style options that vary from chart to chart. NOTE: This variable is optional and not necessary to generate a Plotly chart

To put everything together you simply call:

* <code>Plotly.plot(element, data, layout) </code>

### Element

In the HTML you will want to create an empty div and then give it a template reference named chart. This will serve as the the anchor point for where the chart will be generated. In the SNODAS example the template reference id is known as ``chart`` and can be found within the ``snodas-dialog-content.html``:

```
<h1 mat-dialog-title>Snodas Plotly Example within a Modal</h1>
<div mat-dialog-content>
  <p>An example of a time-series graph from SNODAS</p>
    <div id="chart">
        <!-- chart generated here -->
    </div>
</div>

```

To define the variable element simply provide the following code within typescript file of the graph component: 

```
const element = document.getElementById("chart") as HTMLDivElement;
```

### Data

The  ``data``  for the chart is the data that is going to be displayed in the chart. 

The basic format for scatter plots is the following 

```
trace 1= {
	type: 'scatter',
	mode: 'markers+text'
	x: [1, 2, 3],
	y: [1, 2, 3],
	name: 'trace1'
}
trace2 = {
	type: 'scatter',
	mode: 'markers+text'
	x: [1, 2, 3],
	y: [1, 2, 3],
	name: 'trace2'
}
```



The data for this example is provided through csv and is plotted using the same general format. The steps for setting up the data are put into motion on the the initialization of the component. This can be seen through the following:

```
 ngOnInit() {
    this.openDialog('Volume_Graph');
  }
```

The ``'Volume_Graph'`` parameter specifies the graph that is to be produced, as well as determines where to get the data from depending on the type of chart:

```
 switch(TypeOfData){
      case 'Upstream_Total_Volume_Graph':
        _this.typeOfSnodasChart = 'SWE Upstream Total Volume Graph';
        file = 'assets/SnowpackStatisticsByBasin/SnowpackStatisticsByBasin_UpstreamTotal_'+_this.chartBasinID+'.csv';
        break;
      case 'Volume_Graph':
        // console.log("Entered Volume Graph case");
        _this.typeOfSnodasChart = 'SWE Volume Graph';
        file = 'assets/SnowpackCSVByBasin/'+ this.chartBasinID+'-SWE-Volume.csv';
        break;
      default:
        file = '';
    }
```

This allows for the function to read in the needed csv data. From there the data is read and placed within the ``chartData`` array of objects that specify the type of chart, its mode, the data for each line chart trace on the graph, and its respected naming option.

Format for ```chartData``` object:

```
0: {type: "Scatter", mode: "lines+markers", name: "2004", x: Array(367), y: Array(366)}
1: {type: "Scatter", mode: "lines+markers", name: "2005", x: Array(367), y: Array(366)}
2: {type: "Scatter", mode: "lines+markers", name: "2006", x: Array(367), y: Array(366)}
...
```

x and y data from the csv file is represented as the following:

```
x: (367) ["Date--", "2019-10-1", "2019-10-2", "2019-10-3", "2019-10-4", "2019-10-5",...
```

```
y: (366) [1: 490, 2: 158, 3: 160, 4: 74, 5: 10, 6: 0, 7: 0, 8: 10, 9: 67, 10: 1259,...
```

It is important to note that for time series graphs the date needs to be formatted in the following ways, either ```"YYYY-MM-D"``` or ```"YYYY-MM"```

### Layout 

The ``layout`` variable for this example and Plotly charts alike, defines the graph style options that vary from chart to chart. 

For the SNODAS example the following options are provided. 

```
var layout = {
    title: 'SNODAS Volume Graph',
    xaxis: {
        range: ['2019-10-01', '2020-09-30'],
        type: 'date'
    },
    yaxis: {
        text: 'Y axis',
        autorange: true,
        type: 'linear'
    }
};
```

Finally this example comes together and is generated through the following call:

``` 
Plotly.plot( element, this.plotChartData, layout);
```



## Files Required

The following files and folders are used within this demo:

| **File/Folder**         | **Description**                  | **Repo Ignore** |
| ----------------------- | -------------------------------- | --------------- |
| `SnowpackCSVByBasin/`   | Contains CSV data files for demo |                 |
| ``GMRC2L_F-SWE-Volume`` | CSV SNODAS Data                  |                 |

