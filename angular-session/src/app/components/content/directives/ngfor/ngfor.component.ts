import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  items:any=[
    {name:'milk',price:'$3'},
    {name:'butter',price:'$4'},
    {name:'cheese',price:'$5'}
  ]

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['directives'])
  }
}
