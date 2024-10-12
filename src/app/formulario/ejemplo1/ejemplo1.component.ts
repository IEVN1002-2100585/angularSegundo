import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

interface Usuarios{
  nombre:string;
  edad:number;
  email:string;
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit{
  formGroup!:FormGroup;

  constructor( private fb:FormBuilder){}
  ngOnInit(): void {
    this.formGroup=this.initForm();
  }
  initForm():void{
    return this.fb.group({
      nombre:[''],
      edad:[''],
      email:[''],
    })
  }

  OnSubmit():void{
    console.log(this.formGroup.value);
  }

}
