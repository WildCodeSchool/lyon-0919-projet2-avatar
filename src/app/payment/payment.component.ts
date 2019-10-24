import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  model: Payment = new Payment();

  
  constructor() { }
  
  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.model);
  }
}
