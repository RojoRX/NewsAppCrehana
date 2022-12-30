import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopsUpComponent } from '../pops-up/pops-up.component';


@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
})
export class MainnewsComponent implements OnInit {
  parentMessage:string ="Hi This is my Info";

  @Output() messageEvent = new EventEmitter <string>();
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.messageEvent.emit(this.parentMessage)
    const dialogRef = this.dialog.open(PopsUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
