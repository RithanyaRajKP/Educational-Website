import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
name=" ";
pwd="";
  constructor() { }

  ngOnInit(): void {
  }

}
