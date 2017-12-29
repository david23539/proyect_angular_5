import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {


  title = "Listar";
  //numbers = [0,1,2,3,4,5];
  numbers = new Array(10);
  constructor() { }

  ngOnInit() {
  }

}
