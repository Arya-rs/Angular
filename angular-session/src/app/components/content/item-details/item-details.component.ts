import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  items:any=[]

  constructor(private item_service:ItemService) { }

  ngOnInit(): void {

    this.items = this.item_service.getItem();
  }

}
