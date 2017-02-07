import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { MainStatsComponent } from './main-stats/main-stats.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PlayerService } from './services/player-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MainStatsComponent,
    BasicInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
