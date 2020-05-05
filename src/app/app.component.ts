import { Component } from '@angular/core';
import { CharacterService } from './services/character-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'DnDSheet';

  constructor(chars: CharacterService){
    chars.initCharacter();
  }
}
