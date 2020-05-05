import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Save } from 'src/app/classes/save';

@Component({
    selector: "save-list",
    templateUrl: "./save-list.component.html",
    styleUrls: ["./save-list.component.less"]
})
export class SaveListComponent {
    @Input() ngModel: Save[];
    @Output() ngModelChange = new EventEmitter<Save[]>();

    push(){
        this.ngModelChange.emit(this.ngModel);
    }
}
