import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from, fromEventPattern } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { GeneralChartjsComponent } from './line-chart/general-chartjs/general-chartjs.component';
import { GenericContentComponent } from './generic-content/generic-content.component';
import { GeneralPlotlyComponent } from './plotly/general-plotly/general-plotly.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LineChartComponent,
    PlotlyComponent,
    GeneralChartjsComponent,
    GenericContentComponent,
    GeneralPlotlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
