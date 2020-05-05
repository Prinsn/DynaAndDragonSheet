import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Bonus } from 'src/app/classes/bonus';

@Component({
    selector: "bonus-list",
    templateUrl: "./bonus-list.component.html",
    styleUrls: ["./bonus-list.component.less"]
})
export class BonusListComponent {
    @Input() ngModel: Bonus[];
    @Output() ngModelChanged = new EventEmitter<Bonus[]>();

    newBonus() {
        var newBonus = new Bonus("", 0);
        newBonus.removable = true;
        this.ngModel.push(newBonus);        
        this.push();
    }

    push(){
        this.ngModelChanged.next(this.ngModel);
    }

    remove(bonus: Bonus){
        let at = this.ngModel.indexOf(bonus);
        this.ngModel = this.ngModel.slice(at);
        this.push();
    }
}