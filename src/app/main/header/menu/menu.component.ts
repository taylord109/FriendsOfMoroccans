import { Component, OnInit } from '@angular/core';
import {MainService} from "../../../services/main.service";
import {MainPage} from "../../../../types/mainTypes";

@Component({
  selector: 'fm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  public mainService: MainService;
  constructor(mainService: MainService) {
    this.mainService = mainService;
  }

  ngOnInit() {
  }
  log(page: MainPage){
    console.log('changed to '+ page);
  }

}
