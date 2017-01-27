import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  player: Player;


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
