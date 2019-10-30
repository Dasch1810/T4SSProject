import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  collapsed= false;
  constructor() { }
  aboutRoute:string ="aboutUs"

  ngOnInit() {
  }
changeAboutRoute(route:string){
  this.aboutRoute= route;
}
}
