import { Component, Input } from '@angular/core';
import { PlayerDetails2Service } from '../shared/player-details2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-detail2',
  templateUrl: './player-detail2.component.html',
  styleUrls: ['./player-detail2.component.scss'] 
})
export class PlayerDetail2Component {

  @Input() playerDetails2 = { playerName2: ''};

  constructor(public detail2Api:PlayerDetails2Service, public router: Router) { }

  ngOnInit() { }

  addPlayerDetail(playerData: any) { 
    if (playerData.playerName2.trim() !== '') {
      this.detail2Api.playerName2 = this.playerDetails2.playerName2;
      this.router.navigate(['/game']);
    }
  }
}
