import { Output, Component, EventEmitter, Input } from '@angular/core';
import { Bonus } from '../../classes/bonus';
import { Proficiency } from 'src/app/classes/proficiency';

@Component({
    selector: "bonus",
    templateUrl: "./bonus.component.html",
    styleUrls: ["./bonus.component.less"]
})
export class BonusComponent {
    //todo verify name
    @Output() ngModelChanged = new EventEmitter<Bonus>()
    @Output() remove = new EventEmitter<Bonus>()
    @Input() ngModel: Bonus;
    @Input() label: string;    

    get value(){
        return this.ngModel.value;
    }

    set value(x: number) {        
        this.ngModel.value = x;
        this.ngModelChanged.emit(this.ngModel);
    }

    get name(){
        return this.ngModel.source;
    }

    set name(x: string) {        
        this.ngModel.source = x;
        this.ngModelChanged.emit(this.ngModel);
    }

    get disabled() {
        return this.ngModelChanged instanceof Proficiency
            ? this.ngModelChanged.isProficiency
            : false;
    }

    delete(){
        if(this.ngModel)
            this.remove.next(this.ngModel);
    }
}