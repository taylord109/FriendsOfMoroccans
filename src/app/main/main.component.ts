import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { MainService } from '../services/main.service';
import { MainPage } from '../types/mainTypes';

@Component({
  selector: 'fm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {
  public currentPage: MainPage;
  public mainService: MainService;
  @ViewChild('market') market: ElementRef;

  public screenWidth = 0;
  public screenHeight = 0;

  public screenSizeSub;

  constructor(mainService: MainService) {
    this.mainService = mainService;
    mainService.pageChange.subscribe((pageChange: MainPage) => {
      this.currentPage = pageChange;
    });
  }

  ngOnInit() {
    this.market = this.market.nativeElement;

    this.market['mute'] = true;
    this.market['autoplay'] = true;
    this.market['loop'] = true;

    this.currentPage = this.mainService.currentPage;
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.screenSizeSub = window.addEventListener('resize', event => {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    });
  }

  ngOnDestroy() {
    this.screenSizeSub(); // Unsubscribe from the screen size listener
  }
}
