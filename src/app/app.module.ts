import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import {  HttpClientModule } from '@angular/common/http';
import { PlayerDetail2Component } from './player-detail2/player-detail2.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { GameHelpComponent } from './game-help/game-help.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    PlayerDetailComponent,
    PlayerDetail2Component,
    OptionsPageComponent,
    GameHelpComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
