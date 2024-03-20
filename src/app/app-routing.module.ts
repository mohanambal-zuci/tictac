import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerDetail2Component } from  './player-detail2/player-detail2.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { GameHelpComponent } from './game-help/game-help.component';
 
const routes: Routes = [ 

  { path:'home', component:HomeComponent },
  { path:'game', component:GameComponent },
  { path:'player-detail', component:PlayerDetailComponent },
  { path:'player-detail2', component:PlayerDetail2Component },
  { path:'options-page', component:OptionsPageComponent },
  { path:'game-help', component:GameHelpComponent },
  { path:'', redirectTo:'home', pathMatch:'prefix' }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
