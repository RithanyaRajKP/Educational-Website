import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  clickedItem:any;
  constructor(private http: HttpClient) { }
  getItems(){
this.http.get('userName').subscribe;

  }



}
