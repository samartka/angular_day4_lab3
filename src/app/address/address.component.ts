import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  form:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      address: ['',Validators.required],
      comments: ['']
      });
         
  }

  ngOnInit(): void {
  }

}
