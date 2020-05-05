import { Output, Component, Input, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/classes/skill';

@Component({
    selector: "skill",
    templateUrl: "./skill.component.html",
    styleUrls: ["./skill.component.less"]
})
export class SkillComponent {
    @Input() ngModel: Skill;
    @Output() ngModelChange = new EventEmitter<Skill>();

    push(){
        this.ngModelChange.next();
    }
}