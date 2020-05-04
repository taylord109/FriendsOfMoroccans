import { EventEmitter, Injectable } from '@angular/core';
import { MainPage } from '../types/mainTypes';

@Injectable()
export class MainService {

  public currentPage: MainPage;
  public pageChange: EventEmitter<MainPage> = new EventEmitter<MainPage>();

  constructor() {
    this.currentPage = 'home';
    this.pageChange.subscribe((changedPage: MainPage) => {
      this.currentPage = changedPage;
    });
  }


}
