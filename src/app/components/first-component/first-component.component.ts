import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Manuela'
  age: number = 40
  job = 'programadora'
  hobbies = ['correr', 'jogar', 'estudar']
  car = {
    name: "Corolla",
    year: 2006,
  }

  constructor() {}

  ngOnInit(): void {
  }

}
