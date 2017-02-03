import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';


@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

    @Input() player: Player;
    editable: boolean = false;


    ngOnInit(): void{
      this.player = this.makeLoad();
    }

    makeLoad(): Player {
      let player: Player = {
        characterName: 'Merle HighChurch',
        classAndLevel: 'Cleric 12',
        background: 'Pagan',
        playerName: 'Chris Steffen',
        faction: 'Rebels',
        race: 'Dwarf',
        alignment: 'Chaotic Good',
        experiencePoints: '1999',
        dciNumber:'1827',
      }
      return player;
    }

}
