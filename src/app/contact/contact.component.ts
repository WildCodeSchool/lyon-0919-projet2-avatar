import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: Contact = new Contact();

  
  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  
  onSubmit() {
    this.router.navigate(['/payment']);
    console.log(this.model);
  }
}
