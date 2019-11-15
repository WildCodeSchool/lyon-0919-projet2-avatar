import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  model: Payment = new Payment();

  isFormVisible: boolean = true;
  isModalVisible: boolean = false;
  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  onReturnClicked() {
    this.router.navigate(['/contact']);
  }
  
  onSubmit() {
    console.log(this.model);
    this.isFormVisible = false;
    this.isModalVisible = true;
  };

  onModal() { 
    
  };

  closeModal() {
    this.router.navigate(['/home']);
  }
}
