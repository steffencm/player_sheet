import { Injectable } from '@angular/core';

import { Player } from '../components/player/player.model';
import { BasicInfo } from '../components/player/basic-info/basic-info.model';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayer(id: number){
      let basic_info: BasicInfo = {
          classAndLevel: 'Cleric 12',
          background: 'Pagan',
          playerName: 'Chris Steffen',
          faction: 'Rebels',
          race: 'Dwarf',
          alignment: 'Chaotic Good',
          experiencePoints: '1999',
          dciNumber:'1827',
      };

      let player: Player = {
        characterName: 'Merle HighChurch',
        basic_info: basic_info,
      };
      console.log('here');
      return player;
    }
}
