# TSTool Graph Configuration 

This demo creates a graph by mapping TSTool graph configurations using PlotlyJS.

## Plotly General Concepts 

To actually build a Plotly chart there are 3 basic variables that you will need to be aware of.

* First there we have the ``element`` which is HTML element that will be replaced by the chart. 

* Then there is the ``data`` which is actual data that is going to be displayed in the chart. 

* The third variable is ``style``/``layout`` which defines the style options that vary from chart to chart. NOTE: This variable is optional and not necessary to generate a Plotly chart

To put everything together you simply call:

* ```Plotly.plot(element, data, layout) ```

### Element

In the HTML you will want to create an empty div and then give it a template reference named chart. This will serve as the the anchor point for where the chart will be generated. In the Plotly TSTool Config example the template reference id is known as ``plotlyDiv`` and can be found within the ``plotly-tstool-graph/dialog-content.html``:

```
 <div id="plotlyDiv"></div>
```

### Data 

The  ``data``  for the chart is the data that is going to be displayed in the chart. The data variable also holds information where users can edit properties such as the chart title, axis labels and even trace names that will be shown within the legend.  

To begin the code from this Demo reads in a TSTool json graph configuration file with ```${Property}``` notation. 

```
...
```

Data is first gathered within a ``PopuateGraph`` instance by assigning its members:

##### PopulateGraph instance:

 ```
interface PopulateGraph {
  legendLabel: string;
  chartType: string;
  dateType?: string;
  dataLabels?: string[];
  chartJSDatasetData?: number[];
  plotlyDatasetData?: number[];
  datasetBackgroundColor?: string;
  graphFileType: string;
  startDate?: string;
  endDate?: string;
  xAxesTicksMin: string;
  xAxesTicksMax: string;
  yAxesLabelString: string;
}
 ```

This PopulateGraph instance is then added to an array. This array of PopulateGraph instances is set up so that it can handle numerous amounts of traces within the graph.  

The ``createPlotlyGraph()`` function used, specifies the data formatting for a Plotly chart but also handles the  ``layout`` of the Plotly chart. 

These options include the following to properly set the graph in this demo:

* `` data.line`` - Specifies trace line width

* ``data.name`` - Specifies trace name that will be displayed within the legend
* ``data.mode`` - Specifies the mode of the line. Ex mode: 'lines+markers'
* ``data.type`` - Specifies the type of chart to be produces
* `` data.x `` - Specifies x data points
* `` data.y`` - Specifies y data points 

```
 private createPlotlyGraph(config: PopulateGraph[]): void {

    var finalData: {x: number[], y: number[], type: string}[] = [];
    var data: any;
    var mainGraphLabels = this.createChartMainGraphLabels(config);
    var colorwayArray: string[] = [];
    console.log(config);
    
    for (let i = 0; i < config.length; i++) {
      data = {};
      
      data.line = {
        width: 1
      };
      data.name = config[i].legendLabel;
      data.marker = {
        size: 4
      };
      data.mode = this.setPlotlyGraphMode(config[i].chartType);
      data.type =  this.setPlotlyGraphType(config[i].chartType);
      data.x = mainGraphLabels;
      data.y = config[i].plotlyDatasetData;

      colorwayArray.push(config[i].datasetBackgroundColor);
      finalData.push(data);
    }
...
```



### Layout 

The ``layout`` variable for this example and Plotly charts alike, defines the graph style options that vary from chart to chart. 

The following options are provided for the TSTool Graph Configuration Demo:

```
....
	var layout = {
    //array of strings describing the color to display the graph as for each time series
        colorway: colorwayArray,
        height: 600,
    // Create the legend inside the graph and display it in the upper right
        legend: {
          x: 1,
          xanchor: 'right',
          y: 1
        },
        showlegend: true,
        width: 1000,
        xaxis: {
     // Maximum amount of ticks on the x-axis
          nticks: 8,
          tickangle: 0
        },
        yaxis: {
      // 'r' removes the k from the thousands place for large numbers
          tickformat: 'r',
          title: config[0].yAxesLabelString
        }
      }

```



## Files Required

The following files and folders are used.

| **File/Folder**                     | **Description**                                              | **Repo Ignore** |
| ----------------------------------- | ------------------------------------------------------------ | --------------- |
| `TsToolGraphConfigFiles/`           | Contains graph Configuration files with data and StateMod Classes |                 |
| `0300911.DWR.DivTotal.Month`        | STM FIle                                                     |                 |
| `0300911.StateMod.Streamflow.Month` | STM File                                                     |                 |
| ``diversion-graph-template``        | JSON configuration file                                      |                 |
| `StateModClasses/`                  | Contains StateModClasses                                     |                 |
| ``DateTime``                        | StateMod Class                                               |                 |
| ``StringUtil``                      | StateMod Class                                               |                 |
| ``TimeInterval``                    | StateMod Class                                               |                 |
| ``TimeUtil``                        | StateMod Class                                               |                 |

