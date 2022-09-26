import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "e-store";
  isMenuToggled = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu(): void{
    this.isMenuToggled = !this.isMenuToggled;
  }
}
