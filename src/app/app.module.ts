import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { TitleComponent } from './main/header/title/title.component';
import { MenuComponent } from './main/header/menu/menu.component';
import { AboutComponent } from './main/about/about.component';
import { DonateComponent } from './main/donate/donate.component';
import { AccountComponent } from './main/account/account.component';
import { MainComponent } from './main/main.component';
import { MainService } from './services/main.service';
import { SidebarComponent } from './main/sidebar/sidebar.component';

const homeRoute = '/';

const routes: Routes = [
  {
    path: '', component: MainComponent, pathMatch: 'prefix', children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent, pathMatch: 'full' },
      { path: 'donate', component: DonateComponent, pathMatch: 'full' },
      { path: 'account', component: AccountComponent, pathMatch: 'full' }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '*', redirectTo: homeRoute }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TitleComponent,
    MenuComponent,
    AboutComponent,
    DonateComponent,
    AccountComponent,
    MainComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false })
  ],
  exports: [RouterModule],
  providers: [MainService],
  bootstrap: [AppComponent]
})

export class AppModule {
}