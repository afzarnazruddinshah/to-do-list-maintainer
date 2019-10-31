import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title1 = 'MeanstackProj';

  constructor(private Route : ActivatedRoute)
  {
    this.Route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit()
  {
  
  }

}

// https://www.udemy.com/course/angular-5/learn/lecture/8597330#overview
//For Application deployment in GitHub