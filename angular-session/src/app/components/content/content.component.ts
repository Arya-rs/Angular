import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buttonClick(string:string){
    if (string == 'interpolation'){
      this.router.navigate(['interpolation'])
    }
    else if (string == 'binding'){
      this.router.navigate(['binding'])
    }
    else if (string == 'directives'){
      this.router.navigate(['directives'])
    }
    else if (string == 'componentInteraction'){
      this.router.navigate(['componentInteraction'])
    }
  }
}
