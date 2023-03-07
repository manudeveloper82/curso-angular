import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  show: boolean = false
  
  constructor() {}

  ngOnInit(): void{}

  showMessage(): void {
    this.show = !this.show
  }

}
