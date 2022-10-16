import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }

///////////////////
/// animation onClick
play(choix : number) {
  const audio = document.getElementById("audio-1") as HTMLVideoElement;
  audio.play();
  const buttons = document.querySelectorAll('button');
  const robot = buttons[Math.floor(Math.random() * 3)].innerHTML;
  if (choix === 1 && robot === 'feuille') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation1";
      });
  } 
  if (choix === 1 && robot === 'pierre') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation2";
      });
  }
  if (choix === 1 && robot === 'ciseaux') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation3";
      });
  }
  if (choix === 2 && robot === 'feuille') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation4";
      });
  }
  if (choix === 2 && robot === 'pierre') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation5";
      });
  }
  if (choix === 2 && robot === 'ciseaux') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation6";
      });
  }
  if (choix === 3 && robot === 'feuille') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation7";
      });
  }
  if (choix === 3 && robot === 'pierre') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation8";
      });
  }
  if (choix === 3 && robot === 'ciseaux') {
      document.querySelector(".principal")!.className = "principal";
      requestAnimationFrame((time) => {
      document.querySelector(".principal")!.className = "principal animation9";
      });
  }

}

}
