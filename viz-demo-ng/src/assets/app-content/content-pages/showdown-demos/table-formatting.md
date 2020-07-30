Tables :
--------
| a    |  b   |    c |
| ---- | :--: | ---: |
| 123  | 456  |  789 |
| ABC  | DEF  |  GHI |



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