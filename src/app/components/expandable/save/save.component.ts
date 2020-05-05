import { Output, Component, Input, EventEmitter } from '@angular/core';
import { Save } from 'src/app/classes/save';

@Component({
    selector: "save",
    templateUrl: "./save.component.html",
    styleUrls: ["./save.component.less"]
})
export class SaveComponent {
    @Input() ngModel: Save;
    @Output() ngModelChange = new EventEmitter<Save>();
   
    push(){      
        this.ngModelChange.next(this.ngModel);
    }
}