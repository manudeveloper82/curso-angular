import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent {
  myNumber: Number = 1

  constructor() {}

    ngOnInit(): void {
    }

    onChangeNumber() {
      this.myNumber = Math.floor(Math.random() * 10)
    }

}
