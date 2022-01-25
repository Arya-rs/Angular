import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  ngifValue?:boolean;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleValue(string:string){
    if (string == 'true'){
      this.ngifValue=true;
    }
    else if (string == 'false'){
      this.ngifValue=false;
    }
  }

  back(){
    this.router.navigate(['directives'])
  }
}
