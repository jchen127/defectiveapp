import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  moveRight(curNode): void{
    console.log("This will move right.");
  }

}
