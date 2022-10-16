import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FotoComponent } from './components/foto/foto.component';
import { ContactComponent } from './components/contact/contact.component';
import { GameComponent } from './components/game/game.component';
import { FooterComponent } from './components/footer/footer.component';
import { Web3Component } from './components/web3/web3.component';



@NgModule({
  declarations: [
    HomeComponent,
    FotoComponent,
    ContactComponent,
    GameComponent,
    FooterComponent,
    Web3Component,
  ],

  imports: [
    CommonModule,
    RouterModule,
  ],

  exports: [
    HomeComponent,
    FotoComponent,
    ContactComponent,
    GameComponent,
    FooterComponent,
  ]
})
export class FeedModule { }
