import { Skill } from './skill';
import { Proficiency } from './proficiency';
import { AttributeStat } from './attribute';
import { Save } from './save';

export interface CharacterMiscilany {

}

export class Character {
    name: string;
    level: number = 1;
    stats: AttributeStat[] = [];
    skills: Skill[] = [];
    saves: Save[] = [];
     
    misc: CharacterMiscilany;
    
    get proficiencyBonus() {       
        return new Proficiency(this.proficiency, this)        
    }

    proficiency() {
        return 2 + Math.floor(.25 * (this.level -1));
    }

    getSave(attr: AttributeStat) {
        return new Save(
            attr.shortName || attr.name, 
            attr.bonus, 
            this.proficiencyBonus
        );
    }
}