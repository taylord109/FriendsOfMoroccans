import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { MainService } from '../services/main.service';
import { MainPage } from '../types/mainTypes';

@Component({
  selector: 'fm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements AfterViewInit, OnInit,OnDestroy {
  public currentPage: MainPage;
  public mainService: MainService;
  @ViewChild('headerVideo') headerVideoRef: ElementRef<HTMLVideoElement>;
  public headerVideo: HTMLVideoElement;

  public screenWidth = 0;
  public screenHeight = 0;

  public screenSizeSub;

  constructor(mainService: MainService) {
    this.mainService = mainService;
    mainService.pageChange.subscribe((pageChange: MainPage) => {
      this.currentPage = pageChange;
    });
  }
  ngOnInit(){
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.screenSizeSub = window.addEventListener(
      'resize',
      this.resizeHeader.bind(this)
    );
    this.currentPage = this.mainService.currentPage;
    this.resizeHeader();
  }

  ngAfterViewInit() {
    this.headerVideo = this.headerVideoRef.nativeElement;
    this.headerVideo['mute'] = true;
    this.headerVideo['autoplay'] = true;
    this.headerVideo['loop'] = true;
  }

  resizeHeader() {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    this.screenWidth = window.innerWidth - scrollbar;
    this.screenHeight = window.innerHeight;
  }

  headerVideoCanPlay(headerElement) {
    if (this.headerVideo) {
      this.headerVideo.play();
    }
  }

  ngOnDestroy() {
    this.screenSizeSub(); // Unsubscribe from the screen size listener
  }
}
