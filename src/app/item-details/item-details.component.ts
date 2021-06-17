import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

item: any;
nub : any;
i : any;
labelPosition: 'before' | 'after' = 'after';

  constructor(private router:Router, private itemService: ItemService) {
    this.item= this.itemService.clickedItem;
  }
  backClicked(){
    this.router.navigateByUrl('/items');
  }

  ngOnInit(): void {
  }

}
