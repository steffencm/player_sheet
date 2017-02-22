import { Injectable } from '@angular/core';

let LOGGING_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};


@Injectable()
export class LogService {

  log_history: string[];
  logging_level: number

  constructor() {
    this.log_history = ['Logger Initialized'];
    this.logging_level = LOGGING_LEVELS.INFO;
  }

  debug(message:string){
    if (this.logging_level <= LOGGING_LEVELS.DEBUG){
      this.log_history.push(message);
      console.debug(message);
    }
  }

  info(message:string){
    if (this.logging_level <= LOGGING_LEVELS.INFO){
      this.log_history.push(message);
      console.log(message);
    }
  }

  warn(message:string){
    if (this.logging_level <= LOGGING_LEVELS.WARN){
      this.log_history.push(message);
      console.warn(message);
    }
  }

  error(message:string){
    if (this.logging_level <= LOGGING_LEVELS.ERROR){
      this.log_history.push(message);
      console.error(message);
    }
  }
}
