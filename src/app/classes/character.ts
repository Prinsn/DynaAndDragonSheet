import { Stats } from 'fs';
import { Skill } from './skill';

interface CharacterMiscilany {

}

export class Character {
    name: string;
    level: number;
    stats: Stats[];
    skills: Skill[];
    misc: CharacterMiscilany;

    get proficiency() {
        // TODO Calcuate proficiency from level
        return 0;
    }
}