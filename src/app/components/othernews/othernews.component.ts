import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-othernews',
  templateUrl: './othernews.component.html',
  styleUrls: ['./othernews.component.css']
})
export class OthernewsComponent implements OnInit {
  stateCat=true;
  keyA=false;
  keyB=false;
  keyC=false;
  @ViewChild('containerA') containerA: ElementRef;


  constructor(private elementRef: ElementRef ) {
    this.containerA=this.elementRef;
  }

  ngOnInit(): void {
      
  }


  categorySelector=(value: any)=>{
    this.stateCat=value;
  }

    removeContainer(id:string) {
    const eliminar = this.elementRef.nativeElement.querySelector(id);
    eliminar.remove();
  }
  showCard=(value:string)=>{
    if(value=='A'){
      this.keyA=true;
    }
    if(value=='B'){
      this.keyB=true;
    }
    if(value=='C'){
      this.keyC=true;
    }
    return;
  }

}
