import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Venom', 'Spawn', 'Violator', 'Carnage'];
  public deleted?: string;

  deleteHero(): void {
    this.deleted = this.heroName.pop();
  }


}
