import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent } from './line-chart/general-chartjs/general-chartjs.component';



const routes: Routes = [
  {path: 'snodas-chartjs', component: LineChartComponent},
  {path: 'general-chartjs-ex', component: GeneralChartjsComponent},
  {path: 'general-plotly-chart', component: PlotlyComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
