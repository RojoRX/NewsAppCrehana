import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-othernews',
  templateUrl: './othernews.component.html',
  styleUrls: ['./othernews.component.css']
})
export class OthernewsComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  stateCat=true;
  constructor() {}
  ngOnInit(): void {
  }
  categorySelector=(value: any)=>{
    this.stateCat=value;
  }


}
