import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items=[
    {name:'milk',price:'$3'},
    {name:'butter',price:'$4'},
    {name:'cheese',price:'$5'}
  ]
  constructor() { }

  getItem(){
    return this.items
  }
}
