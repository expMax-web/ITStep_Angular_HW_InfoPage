import { Component, OnInit } from '@angular/core';

const Person = {
  fullName: 'Morty Smith',
  birthday: 'may 4, 2000',
  mobilPhone: '+7 999 99 99',
  city: 'New-York',
  email: 'email@email.com',
  workExperience: 'Google, Yandex',
  skills: 'HTML, CSS, JS, ANGULAR',
  desiredSalary: '2000',
  percentLearnReact: '0.84',
  programmingLanguage: 'PHP',
};
const workExperience = {
  epam: {
    company: 'Epam',
    firstDate: '10.2018',
    endDate: '09.2019',
    position: 'Junior Front-end',
  },
  elma: {
    company: 'Elma',
    firstDate: '10.2019',
    endDate: '05.2021',
    position: 'Middle Front-end',
  },
  google: {
    company: 'Google',
    firstDate: '05.2021',
    endDate: '05.2021',
    position: 'Middle Front-end',
  },
};

const skills: any[] = ['Empathy', 'Stress tolerance', 'Teamwork', 'Discipline'];

const sertificate: any[] = [
  'CSS Basics',
  'HTML5 and CSS Fundamentals',
  'JavaScript Introduction',
];

const ShowName: boolean = true;

const keySkills: any[] = [
  'html',
  'css',
  'angular',
  'react',
  Person.programmingLanguage,
];
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  Person = Person;
  workExperience = workExperience;
  ShowName = ShowName;
  emailBlack = true;
  keySkills = keySkills;
  skills = skills;
  sertificate = sertificate;

  constructor() {}

  ngOnInit(): void {}
}
