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
    // this.web3.setProvider(new Web3.providers.HttpProvider('http://host.url', 0, BasicAuthUsername, BasicAuthPassword));
    console.log('web3 loaded', this.web3)
    this.web3.eth.getCoinbase().then(resp => console.log('coinbase is', resp));
    // console.log('coinbase', this.web3.eth.getBalance(coinbase);
  }
}
