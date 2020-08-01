# **Markdown tables not formatted correctly:**

It may be that a simple markdown table appears unformatted altogether as such:

``` 
| a | b | c | | ----- | :---: | ----: | | 123 | 456 | 789 | | ABC | DEF | GHI |
```

A solution for this consists of importing Showdown with certain options configured.
`imports: [ ShowdownModule.forRoot({emoji: true, noHeaderId: true, flavor: 'github'}) ]`

The **solution above does format markdown as a table but renders without style**. No styling is applied by default with Showdown so that it doesn't interfere with other styling libraries such as Bootstrap.

Because Showdown generates simple HTML, the best practices for styling appearances will be through CSS. The generated Markdown can be wrapped with an id and style.

The style can also be specified by incorporating straight into the Markdown file using a `` tag.
The following CSS can be placed within the markdown source or within respected css file to resolve table formatting.

```
<style> 
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    display: block;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #ededed
  }
</style>```
```

In order to control of specific elements, an extension is needed to create "new syntax" for the file.

Additionally to **format code blocks** as seen in Markdown, add the following CSS:

```
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
}
```

Generic Table Example :
--------

| a    |  b   |    c |
| ---- | :--: | ---: |
| 123  | 456  |  789 |
| ABC  | DEF  |  GHI |

_______________________________

# InfoMapper Markdown File Example: 



# Layer: Colorado Counties

The Colorado counties layer contains all counties in Colorado, colored as follows:

| **Color**   | **Description**                                              |
| ----------- | ------------------------------------------------------------ |
| Black       | Poudre Basin.                                                |
| Blue        | Counties that provide water to the Poudre Basin via transbasin diversions. |
| Dark green  | Counties that physically intersect the Poudre Basin: Larimer and Weld counties. |
| Light green | Counties that are within the South Platte basin and benefit from the Poudre directly or indirectly (**more detail will be added in the future**). |
| Yellow      | Counties that currently or in the future will benefit from transbasin diversions out of the Poudre Basin (**more detail will be added in the future**). |

Popup graphs are available for population.

## Data Sources

The following are data sources for this map:

| **Resource**                         | **Source**                                                   |
| ------------------------------------ | ------------------------------------------------------------ |
| County boundaries map layer.         | [Counties in Colorado](https://data.colorado.gov/Transportation/Counties-in-Colorado/67vn-ijga) map layer dataset from Colorado Information Marketplace. |
| County annual population time series | [Total Population by County by Year](https://data.colorado.gov/Demographics/Total-Population-by-County-by-Year/9dd2-kw29) dataset on Colorado Information Marketplace. |

## Workflow

The workflow to process the data can be found in the [GitHub repository](https://github.com/OpenWaterFoundation/owf-infomapper-poudre/tree/master/workflow/BasinEntities/Physical-Counties). File extensions indicate the software tool used to process the data:

| **File Extension** | **Software Tool**                                        |
| ------------------ | -------------------------------------------------------- |
| `.gp`              | [GeoProcessor](http://software.openwaterfoundation.org/) |
| `.tstool`          | [TSTool](http://software.openwaterfoundation.org/)       |