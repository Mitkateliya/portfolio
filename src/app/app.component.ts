import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'imitkateliya';

  constructor(private renderer:Renderer2){}
  ngOnInit(): void {
    VanillaTilt.init(document.querySelector(".mainContent") as any, {
      max:5,perspective:7000,
    })
  }

  ngAfterViewInit(): void {
    let loader = this.renderer.selectRootElement('.loader');
    this.renderer.setStyle(loader,'display','none');
  }
}
