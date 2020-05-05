import { Bonus } from './bonus';
import { Totalable } from './totalable';
import { AttributeMap } from '../reference/attribute.map';

export class AttributeStat extends Totalable {
    shortName: string;

    //Do to janky whatever with enums and converting to record, key should be keyof AttributeMap
    constructor(key: string){
        super(key);
        this.shortName = key;
        this.name = AttributeMap[key];
    }

    get mod() {
        return Math.floor(this.base - 10) / 2;
    }

    get bonus() {
        return new Bonus(this.name, () => this.mod, this);
    }
}