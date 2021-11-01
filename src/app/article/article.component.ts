import { Component, OnInit } from '@angular/core';

const Person = {
  fullName: "Morty Smith",
  birthday: 'may 4, 2000',
  mobilPhone: "+7 999 99 99",
  city: "New-York",
  email:"email@email.com",
  workExperience:"Google, Yandex",
  skills:"HTML, CSS, JS, ANGULAR",
  desiredSalary: "2000",
  percentLearnReact: "0.84",
  programmingLanguage: "PHP"
}

const ShowName = true;

const keySkills: any[] = [ "html", "css", "angular", "react", Person.programmingLanguage
]
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})



export class ArticleComponent implements OnInit {
  Person=Person
  ShowName = ShowName
  emailBlack= true
  keySkills=keySkills

  constructor() { }

  ngOnInit(): void {
  }


}
