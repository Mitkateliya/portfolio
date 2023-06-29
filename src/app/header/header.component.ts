import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu = ["home","about","projects","services","reach me"]
  openMenu(){
    console.log("menu opened");
    
  }
}
