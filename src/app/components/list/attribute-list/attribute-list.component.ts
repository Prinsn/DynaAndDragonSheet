import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AttributeStat } from 'src/app/classes/attribute';

@Component({
    selector: "attribute-list",
    templateUrl: "./attribute-list.component.html",
    styleUrls: ["./attribute-list.component.less"]
})
export class AttributeListComponent {
    @Input() ngModel: AttributeStat[];
    @Output() ngModelChange = new EventEmitter<AttributeStat[]>();

    push(){
        this.ngModelChange.next();
    }
}