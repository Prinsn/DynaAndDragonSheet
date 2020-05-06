import { Component } from '@angular/core';
import { CharacterService } from './services/character-service';
import { Character } from './classes/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'DnDSheet';
  character: Character;
  
  constructor(private chars: CharacterService){
    this.chars.initCharacter();    
  }
  
  ngOnInit(){
    this.character = this.chars.character;
  }

  get skills() {
    return this.character.skills;
  }

  get misc() {
    return this.character.misc;
  }

  get stats(){
    return this.character.stats;
  }

  get saves() {
    return this.character.saves;
  }

  private parseImport(event: any /* it's a progress event but it doesn't have a property that it has*/){
    try {
      this.character = JSON.parse(event.target.result);
      this.chars.character = this.character;      
    }
    catch (e) {
      alert(e);
    }
  }

  private fileError(event){
    alert(event);
  }

  import(){
    const fileReader = new FileReader();
    fileReader.onload = this.parseImport.bind(this);
    fileReader.onerror = this.fileError;
    
    return new Promise(resolve => {
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = false;
        input.accept = "data:text/json;charset=utf-8,";

        input.onchange = _ => {
            let files = Array.from(input.files);
            resolve(files[0]);
        };

        input.click();
    })
    .then((file: File) => {
      var json = fileReader.readAsText(file);
    })
    .catch(err => alert(err));
  }

  export(){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.character));
    var fileName = this.character.name ?? "unnamed";    
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", fileName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}

function deserialize(json, environment, clazz) {
  var instance = new clazz();
  for(var prop in json) {
      if(!json.hasOwnProperty(prop)) {
          continue;
      }

      if(typeof json[prop] === 'object') {
          instance[prop] = deserialize(json[prop], environment, environment[prop]);
      } else {
          instance[prop] = json[prop];
      }
  }

  return instance;
}
