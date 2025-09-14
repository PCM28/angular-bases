import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title:string = "List of Heroe";

  public initialNames:string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitan America"];

  public heroNames:string[] = [...this.initialNames];

  public deletedHero?:string = "XXX";

  removeLastHero():void{
    this.deletedHero =this.heroNames.pop();
  }

  reset():void{
    this.heroNames = [...this.initialNames];
    this.deletedHero = "XXX";
  }
}
