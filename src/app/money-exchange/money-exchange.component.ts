import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { asLiteral } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-money-exchange',
  templateUrl: './money-exchange.component.html',
  styleUrls: ['./money-exchange.component.css']
})
export class MoneyExchangeComponent implements OnInit {
  form:FormGroup;
  posts:any[];
  convert_amount:number = 0;

  constructor(private httpClient:HttpClient,private fb:FormBuilder) { 
    this.form = this.fb.group({
      source_amount: ['',Validators.required],
      source_code: ['',[Validators.required,Validators.minLength(3)]],
      destination_amount: [''],
      destination_code: ['',[Validators.required,Validators.minLength(3)]],      
      });
         
  }

  ngOnInit(): void {
  }
  getConvert(){
    this.posts=[];
    this.httpClient.get('https://api.exchangeratesapi.io/latest').subscribe(result=>{
      this.posts=result as any[];
      if(isNaN(Number([this.form.value['source_amount']]))) {
        alert("invalid value for source amount")
        return
      }          
      if(this.posts['rates'][this.form.value['source_code']]==undefined){
        alert("invalid source code")
        return
      }
      if(this.posts['rates'][this.form.value['destination_code']]==undefined){
        alert("invalid destination code")
        return
      }
  
      this.convert_amount = Number(this.posts['rates'][this.form.value['destination_code']])/Number(this.posts['rates'][this.form.value['source_code']])*Number([this.form.value['source_amount']]);
      this.convert_amount = Number(this.convert_amount.toFixed(4))
      this.form.patchValue({destination_amount:this.convert_amount})
    }
    )

  }

}
