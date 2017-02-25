import { Component, OnInit, Input } from '@angular/core';

import { BasicInfo } from './basic-info.model';

import { PlayerService } from '../../../services/player-service.service';
import { LogService } from '../../../services/log.service';


@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
  providers: [LogService]
})
export class BasicInfoComponent implements OnInit {

    @Input() basicInfo: BasicInfo;
    player_service: PlayerService;
    logger: LogService;
    editable: boolean = false;

    constructor(logger: LogService){
      this.logger = logger;

    }


    ngOnInit(): void{
        console.log(this.basicInfo);
    }

}
