import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SkillComponent } from './components/expandable/skill/skill.component';
import { SkillListComponent } from './components/list/skill-list/skill-list.component';
import { SaveComponent } from './components/expandable/save/save.component';
import { SaveListComponent } from './components/list/save-list/save-list.component';
import { AttributeComponent } from './components/expandable/attribute/attribute.component';
import { AttributeListComponent } from './components/list/attribute-list/attribute-list.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { BonusListComponent } from './components/list/bonus-list/bonus-list.component';
import { CharacterMiscComponent } from './components/character-misc/character-misc.component';
import { CharacterService } from './services/character-service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    SkillListComponent,
    SaveComponent,
    SaveListComponent,
    AttributeComponent,
    AttributeListComponent,
    BonusComponent,
    BonusListComponent,
    CharacterMiscComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    AppComponent,
    SkillComponent,
    SkillListComponent,
    SaveComponent,
    SaveListComponent,
    AttributeComponent,
    AttributeListComponent,
    BonusComponent,
    BonusListComponent,
    CharacterMiscComponent
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
