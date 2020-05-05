import { STR, DEX, INT, WIS, CHA, CON } from './attribute.map';

export enum SkillEnum {
    Athletics = "Athletics",
    Acrobatics = "Acrobatics",
    SleightOfHand = "Sleight of Hand",
    Stealth = "Stealth",
    Arcane = "Arcana",
    History = "History",
    Investigation = "Investigation",
    Nature = "Nature",
    Religion = "Religion",
    AnimalHandling = "AnimalHandling",
    Insight = "Insight",
    Medicine = "Medicine",
    Perception = "Perception",
    Survival = "Survival",
    Deception = "Deception",
    Intimidation = "Intimidation",
    Performance = "Performance",
    Persuasion = "Persuasion",    
}

export class SkillList {
    static StrSkills = [
        SkillEnum.Athletics,
    ];
    static DexSkills = [
        SkillEnum.Acrobatics,
        SkillEnum.SleightOfHand,
        SkillEnum.Stealth,        
    ];
    static ConSkills = [];
    static IntSkills = [
        SkillEnum.Arcane,
        SkillEnum.History,
        SkillEnum.Investigation,
        SkillEnum.Nature,
        SkillEnum.Religion        
    ];
    static WisSkills = [
        SkillEnum.AnimalHandling,
        SkillEnum.Insight,
        SkillEnum.Medicine,
        SkillEnum.Perception,
        SkillEnum.Survival
    ];
    static ChaSkills = [         
        SkillEnum.Deception,
        SkillEnum.Intimidation,
        SkillEnum.Performance,
        SkillEnum.Persuasion
    ];

    static getSkillEnums(attr: string){
        switch(attr){
            case STR: return this.StrSkills;
            case DEX: return this.DexSkills;
            case CON: return this.ConSkills;
            case INT: return this.IntSkills;
            case WIS: return this.WisSkills;
            case CHA: return this.ChaSkills;
        }
        debugger;
        throw "But why";
    }
}