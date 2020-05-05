import { Component } from '@angular/core';
import { CharacterService } from './services/character-service';
import { Character } from './classes/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'DnDSheet';
  character: Character;
  
  constructor(private chars: CharacterService){
    this.chars.initCharacter();    
  }
  
  ngOnInit(){
    this.character = this.chars.character;
  }

  get skills() {
    return this.character.skills;
  }

  get misc() {
    return this.character.misc;
  }

  get stats(){
    return this.character.stats;
  }

  get saves() {
    return this.character.saves;
  }
}
