import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { PlayerService } from './services/player-service.service';
import { PageNotFoundComponent } from  './components/page-not-found.component';
import { PlayerComponent } from './components/player/player.component';
import { BasicInfoComponent } from './components/player/basic-info/basic-info.component';
import { MainStatsComponent } from './components/player/main-stats/main-stats.component';


  const routes: Routes = [
      { path: 'player',  component: PlayerComponent },
      { path: '**',     component: PageNotFoundComponent },
      { path: '',  redirectTo: '/player', pathMatch: 'full' },
  ]

@NgModule({
  declarations: [
    AppComponent,
    MainStatsComponent,
    BasicInfoComponent,
    PageNotFoundComponent,
    PlayerComponent,
    PlayerComponent,
    BasicInfoComponent,
    MainStatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
