import { Bonus } from './bonus';
import { Totable } from './totalable';

export class Attribute extends Totable{
    constructor(attr: Attribute){
        super();
        this.boni.push();
    }

    get mod() {
        return Math.floor(this.base - 10)/2
    }
}