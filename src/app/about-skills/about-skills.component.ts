import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.css'],
})
export class AboutSkillsComponent implements OnInit {
  @Input() skills!: any;
  @Input() sertificate!: any;

  constructor() {}

  ngOnInit(): void {}
}
