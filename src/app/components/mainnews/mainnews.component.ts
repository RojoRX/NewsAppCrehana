import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopsUpComponent } from '../pops-up/pops-up.component';
@Component({
  selector: 'app-mainnews',
  templateUrl: './mainnews.component.html',
  styleUrls: ['./mainnews.component.css']
}
)
export class MainnewsComponent implements OnInit {
  message: string = 'Hello from parent';
  url = 'https://newsapi.org/v2/top-headlines?country=mx&apiKey=73dde7246e9c408cad54c915dc96afa7';
  req = new Request(this.url);
  @Output() messageEvent = new EventEmitter<string>();

  news: any = [];
  searchText = '';
  stateSearch = true;
  filteredItems: any = [];
  inputText:string="";

  constructor(public dialog: MatDialog) {
  }
  ngOnInit(): void {
    fetch(this.req)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        const myData = data.articles.slice(0, 9);
        this.news = Object.values(myData);
      });

  }
  openPopUp() {
    const dialogRef = this.dialog.open(PopsUpComponent, {
      data: { message: this.message }
    });
  }
  openLink(url: string) {
    window.open(url)
  }
  filterData() {
    this.filteredItems = this.news.filter((item: { title: string; }) => item.title.toLowerCase().includes(this.searchText.toLowerCase()));
    this.stateSearch = false
  }
  /*searchNews(inputValue:string){
    const inputSearch=inputValue.toLowerCase();
    const fetchLink=`https://newsapi.org/v2/everything?q=${inputSearch}&apiKey=73dde7246e9c408cad54c915dc96afa7inputValue`;
    console.log(fetchLink)
    fetch(fetchLink)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const myData = data.articles.slice(0, 9);
      this.news = Object.values(myData);
      console.log(this.news)
    });
  }*/
  
}    
  




