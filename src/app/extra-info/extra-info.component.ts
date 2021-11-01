import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})



export class ExtraInfoComponent implements OnInit {
  @Input() email!:string;
  @Input() workExperience!:string;
  @Input() skills!:string;
  @Input() desiredSalary!:string;
  @Input() percentLearnReact!:string;
  @Input() programmingLanguage!:string;


  elementStyles: any = {
    color: 'red',
    opacity: 0.5,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
