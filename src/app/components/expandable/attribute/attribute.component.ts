import { Input, Component, Output, EventEmitter } from '@angular/core';
import { AttributeStat } from 'src/app/classes/attribute';
@Component({
    selector: "attribute",
    templateUrl: "./attribute.component.html",
    styleUrls: ["./attribute.component.less"]
})
export class AttributeComponent {
    @Input() data: AttributeStat;
    @Output() dataChange = new EventEmitter<AttributeStat>();

    push(){
        this.dataChange.next();
    }
}