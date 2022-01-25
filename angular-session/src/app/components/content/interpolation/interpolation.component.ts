import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})

export class InterpolationComponent implements OnInit {

  message='welcome to angular session'

  constructor( ) { }

  ngOnInit(): void {
  }



}
