import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import {BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class TodolistService {
  
  private goals = new BehaviorSubject <any> ([
    { itemid: 1, itemName: 'Goal1', count: 1},
    { itemid: 2, itemName : 'Goal2', count: 1}
  ]);
  goal = this.goals.asObservable();


  constructor() { }

  addGoal(goal)
  {
    this.goals.next(goal);
  }
}
