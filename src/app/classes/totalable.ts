import { Bonus } from './bonus';

export class Totable {
    name: string;
    base: number;
    boni: Bonus[];
            
    get total(){
        let total = this.base;

        this.boni.forEach(b => total += b.value);

        return total;
    }
}