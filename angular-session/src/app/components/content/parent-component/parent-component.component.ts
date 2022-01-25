import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  childValue='red';
  parentContent='Parent component'

  ngIfValue?:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngValue(string:string){
    if (string =='input'){
      this.ngIfValue=true;
    }
    else if (string =='output'){
      this.ngIfValue=false;
    }
  }

  change(message:string){
    this.parentContent=message;
  }

  setValue(color:string){
    this.childValue=color
  }
}
