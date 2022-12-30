import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pops-up',
  templateUrl: './pops-up.component.html',
  styleUrls: ['./pops-up.component.css']
})
export class PopsUpComponent implements OnInit {

  constructor() { }
  message:string | undefined;
  
  receiveMessage($event: any) {
    this.message = $event
    console.log(this.message)
  }
  ngOnInit(): void {
  }

}
