import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {


  @Input() private name;

  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  goHome()
  {
    this.router.navigate(['']);
  }
}
