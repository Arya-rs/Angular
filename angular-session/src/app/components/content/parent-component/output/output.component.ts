import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() changeContentClick= new EventEmitter();
  text='change parent content'
  textbgColor?:string;

  constructor() { }

  ngOnInit(): void {
  }

  changeContent(){
    this.changeContentClick.emit('New Parent Content');
    this.text='parent content changed'
    this.textbgColor='blue'

  }
}
