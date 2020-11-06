import { Component, OnInit } from '@angular/core';
import { MatDialogRef,
  MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-showdown',
  templateUrl: './dialog-showdown.component.html',
  styleUrls: ['./dialog-showdown.component.css']
})
export class DialogShowdownComponent implements OnInit {

  public text: any;
  public fileExtension: string;
  public fileName: string;

  constructor(public dialogRef: MatDialogRef<DialogShowdownComponent>,) { }

  ngOnInit(): void {
  }

  /**
   * Closes the Mat Dialog popup when the Close button is clicked.
   */
  public onClose(): void {
    this.dialogRef.close();
  }

}
