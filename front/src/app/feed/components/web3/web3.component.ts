import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';

declare var window: any;

@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.scss']
})
export class Web3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var web3 = new Web3(window.ethereum);
    web3.eth.getBlockNumber().then(e => {
      document.getElementById('block')!.innerText = `${e}`
    });
    setInterval(() => {
      web3.eth.getBlockNumber().then(e => {
        document.getElementById('block')!.innerText = `${e}`
      });
    }, 5000)
  }

}
