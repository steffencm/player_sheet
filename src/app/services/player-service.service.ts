import { Injectable } from '@angular/core';

import { Player } from '../player.model';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayer(id: number){
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
      console.log('here');
      return player;
    }
}
