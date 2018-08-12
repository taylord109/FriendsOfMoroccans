import { Component, OnInit } from '@angular/core';
import {MainService} from "../services/main.service";
import {MainPage} from "../../types/mainTypes";

@Component({
  selector: 'fm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public currentPage: MainPage;
  public mainService: MainService;

  constructor(mainService: MainService) {
    this.mainService = mainService;
    mainService.pageChange.subscribe((pageChange: MainPage)=>{
      this.currentPage = pageChange;
    });
  }

  ngOnInit() {
    this.currentPage = this.mainService.currentPage;
  }

}


