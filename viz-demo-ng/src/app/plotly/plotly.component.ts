import { Component, OnInit, ViewChild, ElementRef, TemplateRef, ViewChildren  } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";

declare var Plotly: any;

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {
  // export class PlotlyComponent  {


  constructor(private modalService: BsModalService, private modalService2: NgbModal) { }
  
  modalRef: BsModalRef;
  
  public openModal(template: TemplateRef<any>){
    let _this = this;
    _this.modalService2.open(template, {ariaLabelledBy: 'modal-basic-title', size: 'xl'});
    // this.modalService2.open(template);

  }

  @ViewChild('chart') el: ElementRef;
  
  // @ViewChild('chart') PlotlyComponent;

  // @ViewChildren('chart') public searchElement:ElementRef;

  ngOnInit() {
    this.basicChart();
  }

  ngAfterViewInit(){
    this.basicChart();
    // this.modalService2.open('#template', {ariaLabelledBy: 'modal-basic-title', size: 'xl'});
    // this.openModal(template: TemplateRef<any>);
  }

  basicChart(){
    const element = this.el.nativeElement.focus(); 

    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }];

    const style = {
      margin: { t: 0 }
    };

    Plotly.plot( element, data, style);
  }



}
