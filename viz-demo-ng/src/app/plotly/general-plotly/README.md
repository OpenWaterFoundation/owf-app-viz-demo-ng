# Generic 2D Line Chart Demo: Monthly TS Data 

This basic 2D line chart intends to show you the general concepts behind  Plotly. In the HTML you will want to create an empty div and then give it a template reference name  preferably named ``chart``. This will serve as the the anchor point for where the chart will be generated.

To actually build a Plotly chart there are 3 basic variables that you will need to be aware of.

* First there we have the element which is HTML element that will be replaced by the chart. 

* Then there is the data which is actual data that is going to be displayed in the chart. 

* The third variable is style which defines the style options that vary from chart to chart. 

To put everything together you simply call:

* <code>Plotly.plot(element, data, style) </code>