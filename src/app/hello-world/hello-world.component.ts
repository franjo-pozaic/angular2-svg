import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  ar : number[] = [];

  constructor() {

    for (var _i = 0; _i < 10000; _i++) {
      this.ar[_i] = _i;
    }
   }

  ngOnInit() {
  }

}
