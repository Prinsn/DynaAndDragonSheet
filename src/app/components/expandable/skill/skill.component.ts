import { Output, Component, Input, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/classes/skill';

@Component({
    selector: "skill",
    templateUrl: "./skill.component.html",
    styleUrls: ["./skill.component.less"]
})
export class SkillComponent {
    @Input() data: Skill;
    @Output() dataChange = new EventEmitter<Skill>();

    push(){
        this.dataChange.next(this.data);
    }
}