import { Bonus } from './bonus';
import { Totalable } from './totalable';
import { Proficiency } from './proficiency';

export class Skill extends Totalable {    
    proficiency: Proficiency;
    
    constructor(name: string, attr: Bonus, prof: Proficiency) {
        super(name);
        this.boni.push(attr);        
        this.boni.push(prof);

        this.proficiency = prof;
    }
}