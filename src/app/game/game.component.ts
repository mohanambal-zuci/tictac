import { Component } from '@angular/core';
import { PlayerDetailsService } from '../shared/player-details.service';
import { PlayerDetails2Service } from '../shared/player-details2.service';
enum User {
  None = '',
  X = 'X',
  O = 'O'
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  playerName: string = '';
  playerName2: string = '';

  cells: User[] = new Array(9).fill(User.None);
  currentPlayer: User = User.X;
  winningPlayer: string | undefined;
  winner: User | null = null;
  gameOver: boolean = false;
  xCount = 0;
  oCount = 0;
  drawCount = 0;
  winningCombination: number[] = [];
  playerWon: boolean = false;
  drawWon: boolean = false;

  constructor(public playerDetailsService: PlayerDetailsService, public PlayerDetails2Service: PlayerDetails2Service) { }


  ngOnInit(): void {
    this.playerName = this.playerDetailsService.playerName || 'Player X';
    this.playerName2 = this.PlayerDetails2Service.playerName2 || 'Player O';
  }

  move(i: number): void {
    if (!this.cells[i] && !this.gameOver) {
      this.cells[i] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === User.X ? User.O : User.X;
      this.winnerCheck();
      this.drawCheck();
    }
  }

  winnerCheck(): void {
    const positions: number[][] = [
      [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [6, 4, 2]
    ];

    for (const [a, b, c] of positions) {
      if (this.cells[a] != User.None && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
        this.winner = this.cells[a];
        this.winningCombination = [a, b, c];
        this.won();
        this.playerWon = true;
        this.gameOver = true;
      }
    }
  }

  drawCheck(): void {
    if (!this.cells.includes(User.None) && !this.winner) {
      this.gameOver = true;
      this.draw();
    }
  }

  won(): void {

    if (this.winner == User.X) {
      this.xCount++;
    }

    else if (this.winner == User.O) {
      this.oCount++;
    }
  }

  draw(): void {
    this.drawCount++;
    this.drawWon = true;
  }

  restart(): void {
    this.cells.fill(User.None);
    this.currentPlayer = User.X;
    this.winner = null;
    this.playerWon = false;
    this.drawWon = false;
    this.gameOver = false;
  }
  newGame() {
    this.cells.fill(User.None);
    this.currentPlayer = User.X;
    this.winner = null;
    this.xCount = 0;
    this.oCount = 0;
    this.drawCount = 0;
    this.playerWon = false;
    this.drawWon = false;
    this.gameOver = false;
  }
}
