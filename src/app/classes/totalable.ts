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

        try {
            this.boni.forEach(b => {                
                //Input value is coming in as string
                var val = b.value as any as string;                
                total += parseInt(val || '0');
            });
        }
        catch {
            console.warn(JSON.stringify(this));
        }
        
        return total;
    }
}