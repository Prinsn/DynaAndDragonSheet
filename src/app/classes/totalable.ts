import { Bonus } from './bonus';

export class Totalable {
    name: string;
    base: number = 0;
    boni: Bonus[] = [];

    constructor(name: string){
        this.name = name;
    }

    get total(){
        let total = this.base;

        this.boni.forEach(b => total += b.value);

        return total;
    }
}