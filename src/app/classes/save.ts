import { Totalable } from './totalable';
import { Proficiency } from './proficiency';
import { Bonus } from './bonus';

export const SAVE_STR = "Save";

export class Save extends Totalable { 
    proficiency: Proficiency;
    
    constructor(name: string, attr: Bonus, prof: Proficiency) {
        super(`${name} ${SAVE_STR}`);
        this.boni.push(attr);
        this.boni.push(prof);

        this.proficiency = prof;
    }
}