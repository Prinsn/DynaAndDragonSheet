import { Output, Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
    selector: "skill",
    templateUrl: "./skill.component.html",
    styleUrls: ["./skill.component.less"]
})
export class BonusComponent {
    //todo very name
    @Output() ngModelChanged = new EventEmitter<number>()
    @Input() ngModel: number;
    @Input() label: string;    

    get value(){
        return this.ngModel;
    }

    set value(x: number) {        
        this.ngModel = x;
        this.ngModelChanged.emit(this.ngModel);
    }
}