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

This repository contains the necessary files for developing and deploying the OWF "Angular Visualization Demos" application, developed using the [Angular](https://angular.io/) web framework.



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