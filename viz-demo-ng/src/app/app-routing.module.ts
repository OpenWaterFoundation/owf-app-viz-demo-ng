import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent } from './line-chart/general-chartjs/general-chartjs.component';
import { GenericContentComponent, LinksComponent } from './generic-content/generic-content.component';
import { GeneralPlotlyComponent } from './plotly/general-plotly/general-plotly.component';
import { HeatmapComponent } from './plotly/heatmap/heatmap.component';
import { TstoolGraphConfigComponent } from './tstool-graph-config/tstool-graph-config.component';
import { PlotlyTstoolGraphComponent } from './tstool-graph-config/plotly-tstool-graph/plotly-tstool-graph.component';




const routes: Routes = [
  {path: 'snodas-chartjs', component: LineChartComponent},
  {path: 'general-chartjs-ex', component: GeneralChartjsComponent},
  {path: 'general-plotly-chart', component: GeneralPlotlyComponent},
  {path: 'snodas-plotly-chart', component: PlotlyComponent},
  {path: 'plotly-heatmap', component: HeatmapComponent},
  {path: 'home', component: GenericContentComponent},
  {path: 'tstool-graph-config', component: TstoolGraphConfigComponent},
  {path: 'plotly-tstool-graph', component: PlotlyTstoolGraphComponent},
  {path: 'charting-packages-links', component: LinksComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
