import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-skills',
  templateUrl: './key-skills.component.html',
  styleUrls: ['./key-skills.component.css']
})
export class KeySkillsComponent implements OnInit {



  constructor() { }

  @Input() keySkills!:any;

  ngOnInit(): void {
  }

}
