import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  txtJb!: string;
  txtDev!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.txtJb = 'Jean-Baptiste TOURNEZ';
    this.txtDev = 'Développeur Web :)';
    setTimeout(() => {
      this.typeWriterJb(this.txtJb, 0)
    }, 1000);
  }

  typeWriterJb(word: any, index: any) {
    let title = document.getElementById('title');
    if(index < word.length) {
      setTimeout(() => {
        title!.innerHTML += `<span>${word[index]}</span>`;
        this.typeWriterJb(this.txtJb, index + 1);
      }, 300);
    } else {
      setTimeout(() => {
        title!.innerHTML = '';
        this.typeWriterDev(this.txtDev, 0);
      }, 4000);
    }
  }

  typeWriterDev(word: any, index: any) {
    let title = document.getElementById('title');
    if(index < word.length) {
      setTimeout(() => {
        title!.innerHTML += `<span>${word[index]}</span>`;
        this.typeWriterDev(this.txtDev, index + 1);
      }, 300);
    } else {
      setTimeout(() => {
        title!.innerHTML = '';
        this.typeWriterJb(this.txtJb, 0);
      }, 6000);
    }
  }

  afficherDiplome() {
    this.router.navigateByUrl('/diplome');
  }

}
