import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/classes/skill';

@Component({
    selector: "skill-list",
    templateUrl: "./skill-list.component.html",
    styleUrls: ["./skill-list.component.less"]
})
export class SkillListComponent {
    @Input() ngModel: Skill[];
    @Output() ngModelChange = new EventEmitter<Skill[]>();

    push(){
        this.ngModelChange.next(this.ngModel);
    }
}