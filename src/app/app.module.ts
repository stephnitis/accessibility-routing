import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './Components/page-one/page-one.component';
import { PageTwoComponent } from './Components/page-two/page-two.component';
import { NavigationAnnouncerDirective } from './directives/navigation-announcer.directive';



@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    NavigationAnnouncerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
