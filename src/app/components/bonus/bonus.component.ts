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
    @Output() dataChange = new EventEmitter<Bonus>()
    @Output() remove = new EventEmitter<Bonus>()
    @Input() data: Bonus;
    @Input() label: string;    

    get value(){
        return this.data.value;
    }

    set value(x: number) {        
        this.data.value = x;
        this.dataChange.emit(this.data);
    }

    get name(){
        return this.data.source;
    }

    set name(x: string) {        
        this.data.source = x;
        this.dataChange.emit(this.data);
    }

    get disabled() {
        return this.dataChange instanceof Proficiency
            ? this.dataChange.isProficiency
            : false;
    }

    delete(){
        if(this.data)
            this.remove.next(this.data);
    }
}