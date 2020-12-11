# Gapminder

This repository contains an Open Water Foundation  D3.js- based Gapminder integrated within an Angular application to provide a visualization within larger applications such as OWF's Infomapper.  The Gapminder is an implementation of the [Gapminder.org tool](https://www.gapminder.org/) developed using the [D3.js](https://d3js.org/) JavaScript library. A D3 approach was taken because no suitable solution was available at the time and D3 provided a dynamic option, and even today there may not be an appropriate solution from Gapminder.org that can be used.

### Gapminder Fundementals  

#### Configuration:

These configuration properties specify necessary information that the Gapminder Visualization requires to operate, as well as offers the user many options for customizing the visualization to meet their preferences. This visualization was developed, and based off of, [The Health & Wealth of Nations](https://bost.ocks.org/mike/nations/), created by [Mike Bostock](https://bost.ocks.org/mike/).

The Gapminder visualization requires that a configuration file is specified within typescript file of the Gapminder component:

This path can either be hard coded or provided through top level configuration.

```
let configurationFile = "path/to/configuration_file"; 
```

The configuration file must be of [JSON](https://www.json.org/) format. The file should contain a single JSON structure as follows:

```
{
   "Properties":{ 
            "ConfigurationProperty" : "Property Value" 
    }
}
```

These configuration properties specify necessary information that the Gapminder Visualization requires to operate, as well as offers the user many options for customizing the visualization to meet their preferences.

For more detail on the configuration file see [Configuration File](https://github.com/OpenWaterFoundation/owf-lib-viz-d3-js/wiki/Gapminder-%E2%80%90-configuration-file).

#### CSV File Format:

This gapminder visualization requires an input data set of .csv format, that contains a header with variable names. The expected data format will contain at least 6 columns; although fewer may be provided if the same data are re-used where it seems appropriate.
For example, it is possible to group the markers by the same data as the labels for specific markers. 6 columns is preferable, however, for a configuration that utilizes the visualization to it's fullest extent.

For more detail on the data file see [CSV file](https://github.com/OpenWaterFoundation/owf-lib-viz-d3-js/wiki/Gapminder-%E2%80%90-CSV-Data-File)

#### Annotations File Format:

The Gapminder visualization has the ability to configure annotations . These annotations are able to provide relevant information on certain dates, or data. Specifying an annotations file is optional, and can be omitted from configurations.

General annotations will be displayed in a text box at the lower right corner of the visualization, when animating to the specified date.

Annotations must be specified within the [configuration file](https://github.com/OpenWaterFoundation/owf-lib-viz-d3-js/wiki/Gapminder-‐-configuration-file) by providing the path to the respected annotations file.  Additionally you may also specify whether or not to initially display [specific annotation shapes](https://github.com/OpenWaterFoundation/owf-lib-viz-d3-js/wiki/Gapminder-‐-annotations-file#specific-annotations) on page load.

`` assets/gapminder-data/viz-config.json: ``

```

{
    "Properties":{
         "AnnotationsFileName":"./data/annotations.json",
         "AnnotationShapes":"On"
    }
}
```

As with the CSV file, the annotations file must be of [JSON](https://www.json.org/) format with `date` as the `key`, and a nested JSON object as the `value`. The nested JSON object must specify two properties `Title` and `Description`.

`` assets/gapminder-data/annotations.json: ``

```
{
     "Annotations":{
          "GeneralAnnotations":{
               "2002":{
                    "Title":"Drought",
                    "Description":"Colorado has experienced widespread, severe drought since the late 1800s.  As of 2013, the drought of 2002 is considered the worst single year drought on record in Colorado‘s history. Statewide snowpack was at or near all-time lows. What made 2002 so unusual was that the entire state was dry at the same time.  These conditions were rated exceptional by the U.S. Drought Monitor and were the most severe drought conditions experienced in the region since the Dust Bowl in the 1930s. During 2011-2013, some regions throughout southeastern Colorado have experienced persistent severe to exceptional drought conditions that are comparable to conditions seen during both the 2002 drought and the Dust Bowl of the 1930s."
	        }
          }
     }
}
```

For more detail on annotations see [Annotations File](https://github.com/OpenWaterFoundation/owf-lib-viz-d3-js/wiki/Gapminder-%E2%80%90-annotations-file#specific-annotations)

_______________________________

Given the appropriate input data and configuration file, the gapminder visualization should now be ready to deploy, which will result in a visualization as seen with this example.

This project is open source and can be cloned for deployment as well as development.

## Gapminder Angular Environment 

To integrate the Gapminder into the an Angular application the following files will be required and must be placed within respected locations in of the angular application:

``` gapminder-js.component:```

```
├── gapminder-js
|   ├── css/ 
|   |	├── style.css
|   |	├── gapminder_bootstrap.css
|   ├── js/
|   |	├── gapminder-util/
|   |	|	├── data-class.js
|   |	|	├── display-data.js
|   |	|	├── expand-parameter.js
|   |	|	├── get-parameter.js
|   |	|	├── properties.js
|   |	├── gapminder-6.1.1.js
|   ├── gapminder-js.component.css					CSS for gapminder component
|   ├── gapminder-js.component.html					HTML for gapminder component
|   ├── gapminder-js.component.spec.ts
|   ├── gapminder-js.component.ts					Defines logic for gapminder component
|   ├── README.md


```

``src/assets:``

```

├── gapminder-data/
|   ├── annotations.json					Annotations configuration 
|   ├── sample-data.csv						Gapminder Data 
|   ├── viz-config.json 					Main Gapminder Configuration file

```



### [ ``gapminder-js.component.css`` ]:

Contains some of the Gapminder Styling.

Necessary imports: 

```
@import './css/gapminder_bootstrap.css'; /* alligns specific svg elements properly  */
@import '../../../../node_modules/clusterize.js/clusterize.css'; /* affects the data table within 'Data' tab */
```

**NOTE:**  **Styling for the Gapminder Visualization will also require imports within the global Style.css file of your Angular application** 

``src/style.css:``

```
/* Styling imports for gapminder */
@import "../node_modules/select2/dist/css/select2.min.css"; /* affects dropdown basin selector  */
@import "./app/gapminder/gapminder-js/css/style.css"; /* Gapminder Styling */
```

### [ ``gapminder-js.component.html `` ]:

This file is the landing page for the sunburst visualization static website and contains the basic structural layout for the sunburst visualization, different sections that correspond to each separate tab: 

- Visualization - Displays the Visualization.
- Documentation - Displays user Documentation on how to use the various elements of the visualization.
- Data - Display data used by the visualization.
- Sources - Displays short list of sources used in creating the visualization.

### [ ``gapminder-js.component.ts`` ]:

This file defines the logic  for the Gapminder component,  and references external JavaScript files that handle most of the data and creation for the Gapminder visualization . 

Because the gapminder utilizes external JavaScript rather than the usual TypeScript,  ``gapminder-js.component.ts`` will need to import these specific files and define a reference that can be called within this file as well as within the template:

Reference to external JavaScript Files:

```
import * as gapminderv6         from '../gapminder-js/js/gapminder-6.1.1.js';
import * as display             from '../gapminder-js/js/gapminder-util/display-data.js';
```

Defining Gapminder reference to allow template use: 

```
public gapminderRef = gapminderv6;
```

The Gapminder visualization is then created by first specifying the default option to be set and then calling the main gapminder() wrapper function from ``gapminder-6-1-1.js:`` by providing the path to the configuration file:

```
// Get the element id="defaultOpen" and click for default option to be set 
    document.getElementById("defaultOpen").click();

// call gapminder js functionality using path to configuration file
    gapminderv6.gapminder(configurationFile);
```

This file specifically contains the openTab() function as well which opens and displays the intended div for the visualization when its corresponding tab is selected. 

### [ ``gapminder-6-1-1.js`` ]:

This file adds to the logic that defines the Gapminder component and specifies where all the visualization/animation elements are added to the DOM through the use of [D3.js](https://d3js.org/).

It is important to note that with the update of D3 from V4 to V6 comes exciting new features and improvements!

Relevant changes: 

**d3-selection** has a new event manager:

- d3.event ⇨ (event) passed as the first argument to all listeners [[details](https://observablehq.com/@d3/d3v6-migration-guide#events)]

  ```
  
  ```

**d3-collection** is deprecated, and its methods are replaced:

- d3.nest ⇨ d3.group and d3.rollup (from d3-array) [[details](https://observablehq.com/@d3/d3v6-migration-guide#group)]

- d3.map ⇨ Map [[details](https://observablehq.com/@d3/d3v6-migration-guide#collection)]

- d3.set ⇨ Set [[details](https://observablehq.com/@d3/d3v6-migration-guide#collection)]

- d3.keys ⇨ Object.keys [[details](https://observablehq.com/@d3/d3v6-migration-guide#collection)]

- d3.values ⇨ Object.values [[details](https://observablehq.com/@d3/d3v6-migration-guide#collection)]

- d3.entries ⇨ Object.entries [[details](https://observablehq.com/@d3/d3v6-migration-guide#collection)]

  ```
  
  ```

Refer to the full [D3 6.0 Migration guide](https://observablehq.com/@d3/d3v6-migration-guide) for an detailed look at important API changes.

