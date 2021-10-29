import { Component, OnInit } from '@angular/core';

const Person = {
  fullName: "Morty Smith",
  mobilPhone: "+7 999 99 99",
  city: "New-York",
  email:"email@email.com",
  workExperience:"Google, Yandex",
  skills:"HTML, CSS, JS, ANGULAR"
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})



export class ArticleComponent implements OnInit {
  Person=Person
  constructor() { }

  ngOnInit(): void {
  }

}
