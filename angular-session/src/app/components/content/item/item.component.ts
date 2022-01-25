import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  Items:any=[]

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {

    this.Items = this.itemService.getItem();
  }

}
