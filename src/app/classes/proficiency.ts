import { Bonus, SourceValue } from './bonus';

const PROF_STRING = "Proficiency";

export class Proficiency extends Bonus {
    isProficiency = true;
    proficient = false;

    constructor(value: SourceValue, bindTo?){        
        super(PROF_STRING, value, bindTo);
    }

    get value() {
        console.log(this.proficient);
        
        return this.proficient 
            ? super.value 
            : 0;
    }
}