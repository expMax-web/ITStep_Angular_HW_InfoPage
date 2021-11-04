import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  showPhone:boolean = false

@Input() fullName!:string;
@Input() mobilPhone!:string;
@Input() city!:string;
@Input() ShowName!:boolean;
@Input() birthday!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
