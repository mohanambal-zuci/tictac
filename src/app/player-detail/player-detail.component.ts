import { Component, Input } from '@angular/core';
import { PlayerDetailsService } from '../shared/player-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent {

  @Input() playerDetails = { playerName: ''};

  constructor(public detailApi:PlayerDetailsService, public router: Router) { }

  ngOnInit() { }
  
  addPlayerDetail(playerData: any) { 
    if (playerData.playerName.trim() !== '') { 
      this.detailApi.playerName = playerData.playerName;
      this.router.navigate(['/player-detail2']);
    }
  }
}
