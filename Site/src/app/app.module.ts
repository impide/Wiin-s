import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { DeuxSectionComponent } from './deux-section/deux-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    DeuxSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
