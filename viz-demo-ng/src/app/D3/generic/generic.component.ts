import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-generic-D3',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericD3Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();

  }

  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(GenericD3Component, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


}

@Component({
  selector: 'app-generic-D3-dialog',
  templateUrl: './generic-D3-dialog.html',
  // styleUrls: ['./generic.component.css']
})
export class GenericD3DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GenericD3DialogComponent>) { }

  ngOnInit(): void {
  }

  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

}
