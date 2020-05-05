import { Injectable } from '@angular/core';
import { Character } from '../classes/character';
import { AttributeStat } from '../classes/attribute';
import { SkillList } from '../reference/skill.map';
import { Skill } from '../classes/skill';
import { Save } from '../classes/save';
import { AttributeMap } from '../reference/attribute.map';

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

    initCharacter(){
        this.character = new Character();                  
        for(var key in AttributeMap){        
            
            //Create attributes
            var attr = new AttributeStat(key);
            this.character.stats.push(attr);
            
            //Create saves
            var save = new Save(key, attr.bonus, this.character.proficiencyBonus);
            this.character.saves.push(save);

            //Append skills
            SkillList.getSkillEnums(key)
                .forEach((s: string) => {
                    this.character.skills.push(new Skill(s, attr.bonus, this.character.proficiencyBonus))
                });
        }
    }
}