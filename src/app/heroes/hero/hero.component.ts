import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 66;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = "Dr. Doom";
  }

  changeAge(): void {
    this.age = 666;
  }

  resetForm(): void {
    this.name = "Orlok";
    this.age = 999;
  }

}
