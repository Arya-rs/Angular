import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
 
  defaultInputValue='null'
  buttonName='change text and color';
  changedColor?:string;
  userName=''

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(){
    this.buttonName='text and color changed';
    this.changedColor='red';
  }

}
