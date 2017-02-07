import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../services/player-service.service';


@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

    @Input() player: Player;
    player_service: PlayerService;
    editable: boolean = false;

    constructor(player_service: PlayerService){
      this.player_service = player_service;
    }


    ngOnInit(): void{
      this.player = this.getPlayer();
      console.log('OnINit');
    }

    getPlayer(): Player {
      return this.player_service.getPlayer(1);
    }

}
