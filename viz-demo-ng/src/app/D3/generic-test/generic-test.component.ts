import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as d3 from 'd3';


@Component({
  selector: 'app-generic-test',
  templateUrl: './generic-test.component.html',
  styleUrls: ['./generic-test.component.css']
})
export class GenericTestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();

  }

  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(GenericTestDialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}



@Component({
  selector: 'app-generic-test',
  templateUrl: './generic-test-dialog.html',
  // styleUrls: ['./generic-test.component.css']
})
export class GenericTestDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenericTestDialog>) { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot();
  }

  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

 private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

 private data = [
  {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
  {"Framework": "React", "Stars": "150793", "Released": "2013"},
  {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
  {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
  {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
];

private createSvg(): void {
  this.svg = d3.select("figure#scatter")
  .append("svg")
  .attr("width", this.width + (this.margin * 2))
  .attr("height", this.height + (this.margin * 2))
  .append("g")
  .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawPlot(): void {
  // Add X axis
  const x = d3.scaleLinear()
  .domain([2009, 2017])
  .range([ 0, this.width ]);
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 200000])
  .range([ this.height, 0]);
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  const dots = this.svg.append('g');

  dots.selectAll("dot")
  .data(this.data)
  .enter()
  .append("circle")
  .attr("cx", d => x(d.Released))
  .attr("cy", d => y(d.Stars))
  .attr("r", 7)
  .style("opacity", .5)
  .style("fill", "#69b3a2");

  dots.selectAll("text")
  .data(this.data)
  .enter()
  .append("text")
  .text(d => d.Framework)
  .attr("x", d => x(d.Released))
  .attr("y", d => y(d.Stars))
}

}