import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'The Punisher';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = "Namor";
  }

  changeAge():void {
    this.age = 30;
  }

  resetForm():void {
    // this.name = 'The Punisher';
    this.age = 45;

    document.querySelector('h1')!.innerHTML = `<h1>Desde Angular</h1>`
  }

}
