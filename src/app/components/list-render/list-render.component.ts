import { Component } from '@angular/core';
import { Animal } from 'src/app/Animals';



@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: 'Turkian', type: 'cat', age: 4 },
    {name: 'Tom', type: 'cat', age: 6 },
    {name: 'Frida', type: 'dog', age: 8 },
    {name: 'Bob', type: 'horse', age: 12 }
  ]

  cosmetics = [
    {name:'creme hidra', type:'hidratante'},
    {name:'Progressiva', type:'tratamento'},
    {name:'Maxton', type: 'tintura'},
    {name:'Base Mate', type: 'maquiagem'}
  ]

  animalDetails = ''

  showAge(animal:Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }



}
