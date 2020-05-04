import { Injectable } from '@angular/core';
import { Character } from '../classes/character';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    loadPrevious(): Character {
        // TODO store and load character data
        return null;
    }
    character: Character;

    constructor(){
        this.character = this.loadPrevious() || new Character();
    }
}