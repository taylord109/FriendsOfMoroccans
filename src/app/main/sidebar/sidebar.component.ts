import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { MainPage } from '../../types/mainTypes';

@Component({
  selector: 'fm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  public mainService: MainService;
  constructor(mainService: MainService) {
    this.mainService = mainService;
  }

  ngOnInit() {
  }

}