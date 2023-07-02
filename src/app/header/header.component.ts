import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  openMenuFlag:boolean = false;
  menu = ["home","about","projects","services","reach me"];

  constructor(private router:Router){}
  toggleMenu(){   
    this.openMenuFlag = !this.openMenuFlag;
  }

  navigateTo(route:string){
    this.router.navigate([route]);
  }
}
