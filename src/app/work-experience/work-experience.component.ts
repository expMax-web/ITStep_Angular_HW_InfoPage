import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  @Input() epam!: any;
  @Input() elma!: any;
  @Input() google!: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.epam);
  }
}
