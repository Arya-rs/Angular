import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 buttonClick(string:string){
  if (string=='ngIf'){
    this.router.navigate(['ngif'])
  }
  else if (string == 'ngFor'){
    this.router.navigate(['ngfor'])
  }
 }

}
