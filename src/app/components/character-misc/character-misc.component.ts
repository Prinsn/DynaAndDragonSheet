import { Component, Input } from '@angular/core';
import { Character } from 'src/app/classes/character';

@Component({
    selector: "character-misc",
    templateUrl: "./character-misc.component.html",
    styleUrls: ["./character-misc.component.less"]
})
export class CharacterMiscComponent {
    @Input() data: Character;
}