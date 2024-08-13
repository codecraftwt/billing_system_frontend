import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarVisible: Boolean = false;

  constructor() { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
