import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Bonus } from 'src/app/classes/bonus';

@Component({
    selector: "bonus-list",
    templateUrl: "./bonus-list.component.html",
    styleUrls: ["./bonus-list.component.less"]
})
export class BonusListComponent {
    @Input() data: Bonus[];
    @Output() dataChange = new EventEmitter<Bonus[]>();

    newBonus() {
        var newBonus = new Bonus("", 0);
        newBonus.removable = true;
        this.data.push(newBonus);        
        this.push();
    }

    push(){
        this.dataChange.next(this.data);
    }

    remove(bonus: Bonus){        
        let at = this.data.indexOf(bonus);
        this.data.splice(at);
        this.push();
    }
}