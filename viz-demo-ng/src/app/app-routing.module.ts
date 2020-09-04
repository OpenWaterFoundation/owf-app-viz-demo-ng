import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent } from './line-chart/general-chartjs/general-chartjs.component';
import { GenericContentComponent, LinksComponent, NGXShowdownComponent } from './generic-content/generic-content.component';
import { GeneralPlotlyComponent } from './plotly/general-plotly/general-plotly.component';
import { HeatmapComponent, HeatmapDialog, Heatmap2Component, Heatmap2Dialog } from './plotly/heatmap/heatmap.component';
import { TstoolGraphConfigComponent } from './tstool-graph-config/tstool-graph-config.component';
import { PlotlyTstoolGraphComponent } from './tstool-graph-config/plotly-tstool-graph/plotly-tstool-graph.component';
import { ShowdownNgDemoComponent, ShowdownIMGComponent, ShowdownOptionsComponent, ShowdownCustomCSSComponent } from './generic-content/showdown-ng-demo/showdown-ng-demo.component';
import { PlotlyTsPointLineComponent } from './plotly/plotly-ts-point-line/plotly-ts-point-line.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { SnodasComponent } from './highcharts/snodas/snodas.component';
import { HeatmapHCComponent, HeatmapTSHCComponent} from './highcharts/heatmap/heatmap.component';
import { TstoolConfigComponent } from './highcharts/tstool-config/tstool-config.component';
import { GenericD3Component } from './D3/generic/generic.component';
import { GenericTestComponent } from './D3/generic-test/generic-test.component';
// import { TstoolConfigComponent } from './highcharts/tstool-config/tstool-config.component';




const routes: Routes = [

  {path: 'angular-visualization-demos', component: GenericContentComponent},
  {path: 'home', component: GenericContentComponent},
  {path: 'resources', component: LinksComponent},

  {path: 'showdown/demo-file', component: NGXShowdownComponent},
  {path: 'showdown/table-formatting', component: ShowdownNgDemoComponent},
  {path: 'showdown/img-integration', component: ShowdownIMGComponent},
  {path: 'showdown/options', component: ShowdownOptionsComponent},
  {path: 'showdown/custom-css', component: ShowdownCustomCSSComponent},




  {path: 'chartjs/generic-month-line', component: GeneralChartjsComponent},
  {path: 'chartjs/snodas-day-line', component: LineChartComponent},
  {path: 'chartjs/tstool-month-line', component: TstoolGraphConfigComponent},

  
  {path: 'plotly/generic-month-line', component: GeneralPlotlyComponent},
  {path: 'plotly/snodas-day-line', component: PlotlyComponent},
  {path: 'plotly/tstool-month-line', component: PlotlyTstoolGraphComponent},
  {path: "plotly/tstool-year-point-line", component: PlotlyTsPointLineComponent},
  {path: 'plotly/heatmap-generic', component: HeatmapComponent},
  {path: 'plotly/heatmap-ts', component: Heatmap2Component},

  {path: 'highcharts/generic', component: HighchartsComponent},
  {path: 'highcharts/snodas-day-line', component: SnodasComponent},
  {path: 'highcharts/tstool-month-line', component: TstoolConfigComponent},
  {path: 'highcharts/heatmap-generic', component: HeatmapHCComponent},
  {path: 'highcharts/heatmap-ts', component: HeatmapTSHCComponent},
  // {path: 'highcharts/heatmap-temp', component: HeatmapHCTempComponent},

  {path: 'D3/generic', component: GenericD3Component},
  {path: 'D3/generic-test', component: GenericTestComponent},




  
  { path: '**', component: GenericContentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
