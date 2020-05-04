import { Attribute } from '@angular/core';
import { Bonus } from './bonus';

export class Skill {
    name: string;
    attribute: Attribute;
    boni: Bonus[];
}