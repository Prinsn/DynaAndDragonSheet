import { Output, Component, Input, EventEmitter } from '@angular/core';
import { Save } from 'src/app/classes/save';

@Component({
    selector: "save",
    templateUrl: "./save.component.html",
    styleUrls: ["./save.component.less"]
})
export class SaveComponent {
    @Input() data: Save;
    @Output() dataChange = new EventEmitter<Save>();
   
    ngOnInit(){
        // debugger;
    }

    push(){      
        this.dataChange.next(this.data);
    }
}