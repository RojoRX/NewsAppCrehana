import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { __values } from 'tslib';
import { PopsUpComponent } from '../pops-up/pops-up.component';
@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
}
)
export class MainnewsComponent implements OnInit {
  message: string = 'Hello from parent';
  url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2023-01-04&' +
    'sortBy=popularity&' +
    'apiKey=73dde7246e9c408cad54c915dc96afa7';
  req = new Request(this.url);
  @Output() messageEvent = new EventEmitter<string>();

  news:any=[];

  constructor(public dialog: MatDialog) { 
  }
  ngOnInit(): void {
     fetch(this.req)
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
      const myData = data.articles; 
      this.news=Object.values(myData);
      console.log(this.news)
    });
}
  openPopUp() {
    const dialogRef = this.dialog.open(PopsUpComponent, {
      data: { message: this.message }
    });
  }  
  
}


