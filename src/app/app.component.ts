import { Component } from '@angular/core';
// const Web3 = require('web3');
import Web3 from 'web3';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  coinbase;
  balance;

  constructor() {
    console.log('web3 loaded', this.web3)
    // console.log('coinbase', this.web3.eth.coinbase)
    // console.log('coinbase', this.web3.eth.getBalance(coinbase);
  }
}
