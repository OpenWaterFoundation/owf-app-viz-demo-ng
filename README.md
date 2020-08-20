# owf-app-viz-demo-ng
This repository contains an Open Water Foundation application that tests different visualizations for time series and spatial data in Angular.  Specific examples at the moment utilize graphing libraries such as Chart.js and Plotly for data visualization. 

* [Introduction](#introduction)
* [Repository Contents](#repository_contents)
* [Getting Started](#getting-started)
* [Running the Application Locally](#running_the_application_locally)
* [Contributing](#contributors)
* [Maintainers](#license)
* [License](#license)
* [Resources](#resources)



## Introduction 

This repository contains the necessary files for developing and deploying the OWF "Angular Visualization Demos" application, developed using the [Angular](https://angular.io/) web framework. These demos are intended to be plugged into various applications, such as OWF's [InfoMapper](link),  in order to support packages and improve functionality over time. 



## Repository Contents

A standard development folder structure is recommended, consistent with the main [CDSS SNODAS Tools software](https://github.com/OpenWaterFoundation/cdss-app-snodas-tools):

```
C:\Users\users\                         Windows: Developer home folder.
/home/user/                             Linux:  Developer home folder.
  owf-dev/                              CDSS development home folder.
    owf-viz-Tools/                   CDSS SNODAS Tools home folder.
      git-repos/                        Git repositories for visualization Tools.
        owf-app-viz-demo-ng/              Git repository for this repository.
```

The following files are located within this repository. The repository contains a folder `src` with website files, including top-level `index.html`.

```
owf-app-viz-demo-ng/                      Git repository files for this repository.
  viz-demo-ng/                        The web application files to test.
    e2e/                                End to end testing.
    src/
      app/                              Contains angular component files in which application logic and data are defined.
        nav-bar/                        NavBarComponent(class, template, CSS, test).
        app.component.css               CSS for AppComponent
        app.component.html              HTML for AppComponent
        app.component.spec.ts           Unit test for AppComponent
        app.component.ts                Defines logic for app's root component.
        app.module.ts                   Tells angular how to assemble the application.
        globals.ts                      Class with global functions and variables.
      assets/                           Contains images and other assets to be copied in when the application is built.
        SnowpackGraphsByBasin/          Graph data that correspond to the line chart example.
      environments/                     Contains build configuration options for target environments.
      favicon.ico                       Website icon.
      index.html                        Main application landing page.
      main.ts                           Main entry point of the application.
      polyfills.ts                      Provides polyfill scripts for browser support.
      stlyes.css                        CSS for the entire angular application.
      test.ts                           Main entry point for unit tests.
    .editorconfig                       Configuration for code editors
    .gitignore                          Git configuration file to ignore files.
    README.md                           Readme for angular.
    angular.json                        CLI configuration defaults.
    browserlist                         Configures sharing of target browsers
    karma.conf.js                       Karma configuration
    package-lock.json                   Version information for all packages installed into node_modules.
    tsconfig.app.json                   Typescript configuration, typescript and Angular template compiler options.
    tsconfig.spec.json                  Typescript configuration for the application tests.
    tslint.json                         TSLint configuration.
  .gitattributes                        Git configuration file for repository properties.
  .gitignore                            Git configuration file to ignore files.
  README.md                             This file.
```



## Application Menus and Corresponding Workflow

The web application provides menus, which display context-specific maps, as follows. The README for each product provides information about data sources and workflow processing.

| **Menu**                                                | **README**                                                   | **Description**                                              |
| ------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ***Resources***                                         | ===========                                                  | ===============================                              |
| ***Showdown***/                                         | [README]()                                                   | Showdown demonstration relevant to Angular application integration - Contains general demo file |
| **Showdown Table Formatting**                           | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/blob/master/viz-demo-ng/src/assets/app-content/content-pages/showdown-demos/table-formatting.md) | Showdown demo to assist in rendering tables                  |
| **Showdown Image Integration**                          | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/blob/master/viz-demo-ng/src/assets/app-content/content-pages/showdown-demos/image-integration.md) | Showdown Image Integration                                   |
| **Showdown Options**                                    | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/blob/master/viz-demo-ng/src/assets/app-content/content-pages/showdown-demos/options.md) |                                                              |
| ***ChartJS/***                                          | ===========                                                  | ===============================                              |
| ***Generic ChartJS Demo***                              | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/tree/master/viz-demo-ng/src/app/line-chart) | Generic ChartJS Demo for beginners                           |
| ***SNODAS Line Chart Demo- Daily Time Series Data***    | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/tree/master/viz-demo-ng/src/app/line-chart) | ChartJS graphing demonstration using daily time series data from |
| ***TsTool Graph Configuration Demo- Monthly TS Data***  | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/tree/master/viz-demo-ng/src/app/line-chart) | ChartJS graphing demonstration using monthly time series data from TsTool configuration files |
| ***PlotlyJS/***                                         | ===========                                                  | ===============================                              |
| ***2D Line Chart Demo- Monthly TS Data***               | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/tree/master/viz-demo-ng/src/app/plotly) | Generic Plotly time series graphing demonstration            |
| ***SNODAS Line Chart Demo - Daily TS Data***            | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/tree/master/viz-demo-ng/src/app/plotly) | PlotlyJS graphing demonstration using daily time series data from |
| ***TSTool Graph Configuration Demo - Monthly TS Data*** | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/tree/master/viz-demo-ng/src/app/tstool-graph-config/) | Plotly graphing demonstration using monthly time series data from TsTool configuration files |
| **TSTool Graph Configuration - Point and Line graph**   |                                                              |                                                              |
| ***Basic HeatMap Demo***                                | [README](https://github.com/OpenWaterFoundation/owf-app-viz-demo-ng/tree/master/viz-demo-ng/src/app/plotly) | Generic PlotlyJS HeatMap graphing demonstration              |
| **HeatMap: CSV Daily Streamflow**                       |                                                              | Heatmap demonstration using CSV data                         |
| **Hightcharts/**                                        |                                                              |                                                              |
| **Generic Line Chart- Yearly Data**                     |                                                              |                                                              |
| ***Dygraphs/***                                         | ===========                                                  | ======== **In Development**========                          |
| ***D3/***                                               | ===========                                                  | ======== **In Development**========                          |
|                                                         |                                                              |                                                              |
|                                                         |                                                              |                                                              |
|                                                         |                                                              |                                                              |
|                                                         |                                                              |                                                              |
|                                                         |                                                              |                                                              |

## Libraries Used 

This application [Open Water Foundation](https://openwaterfoundation.org/) tests different visualizations for time series and data in Angular. Specific examples focus on popular and feature-rich charting libraries that are used in Open Water Foundation applications which utilize these graphing libraries such as Chart.js and Plotly.js for water data visualizations.

### Chart.JS

**Chart.js** is a community maintained free open-source JavaScript library for data visualization, which supports 8 different chart types by using the HTML `` element.

This library is responsive, and allows for mixed chart types (ex. a line chart with a bar graph on top of it), as well as different axis types (date time, logarithmic, and even custom scales), and even supports animations.

**Library Documentation:**

- [**Chart.JS**](https://www.chartjs.org/)

**Open Water Foundation demonstration of chart.js library:** [OpenWaterFoundation/owf-lib-chart-js](https://github.com/OpenWaterFoundation/owf-lib-viz-chart-js)

_____________________

### Plotly.JS

**Plotly.js** is a high-level, declarative charting library, free and open-source. Plotly.js ships with over 40 chart types, including 3D charts, statistical graphs, and SVG . This library abstracts the types of statistical and scientific charts that you would find in packages like matplotlib, ggplot2, or MATLAB.

**Library Documentation:**

- [**Plotly.JS**](https://plotly.com/javascript/)

**Open Water Foundation demonstration of chart.js library:** [OpenWaterFoundation/owf-lib-viz-plotly-js](https://github.com/OpenWaterFoundation/owf-lib-viz-plotly-js)

______________________

### Angular Showdown

**ngx-showdown** is an Angular integration of [Showdown](http://showdownjs.com/). **Showdown** is a JavaScript Markdown to HTML converter, based on the original works by John Gruber. Showdown can be used client side (in the browser) or server side (with NodeJs).

**Library Documentation:**

- [**Angular Showdown: ngx-showdown**](https://yisraelx.github.io/ngx-showdown/docs/pipes/ShowdownPipe.html)
- [**Showdown: showdown**](https://github.com/showdownjs/showdown)

**Open Water Foundation demonstration of Showdown library:** [OpenWaterFoundation/owf-lib-showdown-js](https://github.com/OpenWaterFoundation/owf-lib-showdown-js)


This application [Open Water Foundation](https://openwaterfoundation.org/) tests different visualizations for time series and data in Angular. Specific examples focus on popular and feature-rich charting libraries that are used in Open Water Foundation applications which utilize these graphing libraries such as Chart.js and Plotly.js for water data visualizations.

### Chart.JS

**Chart.js** is a community maintained free open-source JavaScript library for data visualization, which supports 8 different chart types by using the HTML `` element.

This library is responsive, and allows for mixed chart types (ex. a line chart with a bar graph on top of it), as well as different axis types (date time, logarithmic, and even custom scales), and even supports animations.

**Library Documentation:**

- [**Chart.JS**](https://www.chartjs.org/)

**Open Water Foundation demonstration of chart.js library:** [OpenWaterFoundation/owf-lib-chart-js](https://github.com/OpenWaterFoundation/owf-lib-viz-chart-js)

_____________________

### Plotly.JS

**Plotly.js** is a high-level, declarative charting library, free and open-source. Plotly.js ships with over 40 chart types, including 3D charts, statistical graphs, and SVG . This library abstracts the types of statistical and scientific charts that you would find in packages like matplotlib, ggplot2, or MATLAB.

**Library Documentation:**

- [**Plotly.JS**](https://plotly.com/javascript/)

**Open Water Foundation demonstration of chart.js library:** [OpenWaterFoundation/owf-lib-viz-plotly-js](https://github.com/OpenWaterFoundation/owf-lib-viz-plotly-js)

______________________

### Angular Showdown

**ngx-showdown** is an Angular integration of [Showdown](http://showdownjs.com/). **Showdown** is a JavaScript Markdown to HTML converter, based on the original works by John Gruber. Showdown can be used client side (in the browser) or server side (with NodeJs).

**Library Documentation:**

- [**Angular Showdown: ngx-showdown**](https://yisraelx.github.io/ngx-showdown/docs/pipes/ShowdownPipe.html)
- [**Showdown: showdown**](https://github.com/showdownjs/showdown)

**Open Water Foundation demonstration of Showdown library:** [OpenWaterFoundation/owf-lib-showdown-js](https://github.com/OpenWaterFoundation/owf-lib-showdown-js)

## Getting Started 

Development and deployment of this angular based web application requires the following tools:

1. Node.js

```
To install Node.js, go to [nodejs.org](https://nodejs.org)
```

1. npm

```
Npm is automatically installed with Node.js. To check what version of npm is installed run `npm -v`. To update npm run `npm install npm@latest -g`.
```

1. Angular CLI

```
To check what version is installed run `ng --version`. If Angular CLI needs installed run `npm install -g @angular/cli`.
```



## Running the Application Locally

To run the application locally, such as during development:

1. Open a Linux shell (ex. Git Bash).

2. `cd` to the `owf-app-viz-demo-ng` folder.

3. Update the Angular packages and dependencies by running `npm install`.

4. If `npm install` generates vulnerabilities run `npm audit fix`.

   For information about `npm audit fix` and why `npm install` generates vulnerabilities go to [docs.npm.js.com](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities).

5. Serve the application using a local web server and open browser window by running `ng serve --open`.

6. Use CTRL-c to kill the local server.

## Contributing

Contributions can be made via normal Git/GitHub protocols:

1. Those with commit permissions can make changes to the repository.
2. Use GitHub Issues to suggest changes (preferred for small changes).
3. Fork the repository and use pull requests. Any pull requests should be based on current master branch contents.

## Maintainers

The Info Mapper is maintained by the Open Water Foundation.

## License

The license is being determined. Repositories are private until then.

## Resources

- [Angular](https://angular.io/)