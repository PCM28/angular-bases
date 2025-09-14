import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-b10-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  public characters:Character[] = [
    {
      name: "Alien X",
      power: 1000000
    },
    {
      name: "Fire",
      power: 10000
    },
    {
      name: "Big Chill",
      power: 70000
    }
  ];
}
