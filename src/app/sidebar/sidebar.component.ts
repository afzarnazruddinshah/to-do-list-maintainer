import { Router, ActivatedRoute } from '@angular/router';
import { TodolistService } from './../todolist.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  toDoItem: string = '';
  toDoList = [];
  listSize: number;

  //New Loop:
  someArray  = [1,2,3,4,5];

  constructor(private _data : TodolistService, private route: ActivatedRoute, private router: Router) 
  { 

  }

  ngOnInit() {
    this.listSize = this.toDoList.length;
  
    this._data.goal.subscribe(res => this.toDoList = res);
    this._data.addGoal(this.toDoList);
    this.listSize = this.toDoList.length;

  }

  buttonClick()
  {
    console.log('button clicked');
  }

  subqtydisabled(item)
  {
      return item.count === 1 ? true : false;
  }

  addQty(item1)
  {
    let index = this.toDoList.indexOf(item1);
    console.log(index);
    let itemA = this.toDoList[index];
    itemA.count = itemA.count+1;
    this.toDoList.splice(index, 1, itemA);
    // this.toDoList[partitem].count = this.toDoList[partitem].count+1; 
  }  

  subQty(item1)
  {
    let index = this.toDoList.indexOf(item1);
    console.log(index);
    let itemA = this.toDoList[index];
    itemA.count = itemA.count-1;
    this.toDoList.splice(index, 1, itemA);
  }
  delItem(item1)
  {
    console.log('delItem Clicked', item1);
    //let listcopy = [...this.toDoList];
    // listcopy.filter(item);
    //this.toDoList = listcopy;
    //console.log(this.toDoList);
    let listcopy = this.toDoList.filter(item => item.itemid !== item1.itemid);
    this.toDoList = listcopy;
    console.log(this.toDoList);
    this.listSize = this.toDoList.length;
  }

  addToList()
  {
    let itemid = Math.random()*100;
    let item = { itemid : itemid, itemName : this.toDoItem, count : 1};
    this.toDoList.push(item);
    this.toDoItem = '';
    this.listSize = this.toDoList.length;
    console.log(this.toDoList);
    this._data.addGoal(this.toDoList);
    console.log(this._data);
  }

  resetList()
  {
    this.toDoList = [];
    this._data.addGoal(this.toDoList);
    this.listSize = this.toDoList.length;
  }

 



}
