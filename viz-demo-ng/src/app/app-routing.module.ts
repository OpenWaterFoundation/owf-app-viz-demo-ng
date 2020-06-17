import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent } from './line-chart/general-chartjs/general-chartjs.component';
import { GenericContentComponent } from './generic-content/generic-content.component';
import { GeneralPlotlyComponent } from './plotly/general-plotly/general-plotly.component';




const routes: Routes = [
  {path: 'snodas-chartjs', component: LineChartComponent},
  {path: 'general-chartjs-ex', component: GeneralChartjsComponent},
  {path: 'general-plotly-chart', component: GeneralPlotlyComponent},
  {path: 'snodas-plotly-chart', component: PlotlyComponent},
  {path: 'home', component: GenericContentComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
