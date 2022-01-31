import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { DeuxSectionComponent } from './deux-section/deux-section.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuatriemSectionComponent } from './quatriem-section/quatriem-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    DeuxSectionComponent,
    FooterComponent,
    QuatriemSectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
