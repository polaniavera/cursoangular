import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Mr. Satan",
      power: 150
    },
    {
      id: uuid(),
      name: "Brolin",
      power: 15000
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 8888
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
      // name: character.name,
      // power: character.power
    };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
