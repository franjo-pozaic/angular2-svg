import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
   x : number;
   y : number;
   pos : string;

  constructor() { 
    this.x = Math.floor(Math.random() * 5000) + 1;
    this.y = Math.floor(Math.random() * 5000) + 1;
    this.pos = ""+this.x + " " + this.y + " 100 100";
  }

  ngOnInit() {
  }

}
