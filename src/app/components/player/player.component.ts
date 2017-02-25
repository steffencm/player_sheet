import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../../services/player-service.service';
import { LogService } from '../../services/log.service';
import { Player } from './player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService, LogService],
})
export class PlayerComponent implements OnInit {

  logger: LogService;
  player_service: PlayerService;
  player: Player;

  constructor(logger: LogService, player_service: PlayerService) {
    this.logger = logger;
    this.player_service = player_service;
    this.player = this.player_service.getPlayer(1);
   }

  ngOnInit() {

  }

}
