import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretives',
  templateUrl: './diretives.component.html',
  styleUrls: ['./diretives.component.scss']
})
export class DiretivesComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor() {}

  ngOnInit(): void{}

}
