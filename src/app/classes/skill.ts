import { Attribute } from '@angular/core';
import { Bonus } from './bonus';
import { Totable } from './totalable';

export class Skill extends Totable {
    name: string;
    attribute: Attribute;    
}