import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'imitkateliya';

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector(".mainContent") as any, {
      max:10,perspective:5000,
    })
  }
}
