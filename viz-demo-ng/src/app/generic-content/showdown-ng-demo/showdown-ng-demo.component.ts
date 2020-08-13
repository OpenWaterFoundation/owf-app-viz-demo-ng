import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitterService } from '../../event-emitter.service';  
import { ShowdownComponent } from 'ngx-showdown';
import * as Showdown from 'showdown';

@Component({
  selector: 'app-showdown-ng-demo',
  templateUrl: './showdown-ng-demo.component.html',
  styleUrls: ['./showdown-ng-demo.component.css']
})
export class ShowdownNgDemoComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService) { }


  ngOnInit(): void {
    this.openDialog();
    if (this.eventEmitterService.subsVar==undefined) {  
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeShowdownTableComponentFunction.subscribe(() => {    
        console.log("Step 3: Showdown table --> openDialog call");
        this.openDialog(); 
      });    
    }    
  }

  
  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(ShowdownTableDialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  // schema: any = Showdown.getDefaultOptions(false);
  // optionsKeys: string[] = Object.keys(this.schema);
  // flavors: Showdown.Flavor[] = ['allOn', 'ghost', 'github', 'original', 'vanilla'];


  // options: Showdown.ShowdownOptions;
  // sanitize: boolean = false;
  // flavor: Showdown.Flavor;


}

@Component({
  selector:'showdown-table-dialog',
  templateUrl: 'showdown-demo-content.html'
})

export class ShowdownTableDialog implements OnInit{

  constructor( public dialogRef: MatDialogRef<ShowdownTableDialog>) { }
  ngOnInit() {
  }

  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

  
}

@Component({
  selector: 'showdown-img-demo',
  templateUrl: './showdown-ng-demo.component.html',
  // styleUrls: ['./showdown-ng-demo.component.css']
})
export class ShowdownIMGComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService) { }


  ngOnInit(): void {
    this.openDialog();
    if (this.eventEmitterService.subsVar==undefined) {  
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeShowdownImgComponentFunction.subscribe(() => {
        console.log("Step 3: Showdown Img --> openDialog call");
    
        this.openDialog(); 
      });    
    }    
  }

  
  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(ShowdownIMGDialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


}

@Component({
  selector:'showdown-img-dialog',
  templateUrl: 'showdown-img-content.html'
})

export class ShowdownIMGDialog implements OnInit{

  constructor( public dialogRef: MatDialogRef<ShowdownIMGDialog>) { }
  ngOnInit() {
  }

  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

  
}
















@Component({
  selector: 'showdown-options-demo',
  templateUrl: './showdown-ng-demo.component.html',
  // styleUrls: ['./showdown-ng-demo.component.css']
})
export class ShowdownOptionsComponent implements OnInit {

  constructor(public dialog: MatDialog, private eventEmitterService: EventEmitterService) { }


  ngOnInit(): void {
    this.openDialog();
    if (this.eventEmitterService.subsVar==undefined) {  
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeShowdownOptionsComponentFunction.subscribe(() => {
        console.log("Step 3: Showdown options --> openDialog call");
    
        this.openDialog(); 
      });    
    }    
  }

  
  openDialog(): void {
    console.log("Entered openDialog Function")
    const dialogRef = this.dialog.open(ShowdownOptionsDialog, {
      height: '650px',
      width: '1000px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


}

@Component({
  selector:'showdown-options-dialog',
  templateUrl: 'showdown-options-content.html'
})

export class ShowdownOptionsDialog implements OnInit{

  constructor( public dialogRef: MatDialogRef<ShowdownOptionsDialog>) { }
  ngOnInit() {
  }

  /**
  * Closes the Mat Dialog popup when the Close button is clicked.
  */
 onClose(): void { this.dialogRef.close(); }

  
}
