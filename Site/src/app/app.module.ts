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
import { TroisiemSectionComponent } from './troisiem-section/troisiem-section.component';
import { FeatureComponent } from './feature/feature.component';
import { TokenComponent } from './token/token.component';
import { Token1sectionComponent } from './token1section/token1section.component';
import { Token2sectionComponent } from './token2section/token2section.component';
import { NextStepComponent } from './next-step/next-step.component';
import { NextStep1sectionComponent } from './next-step1section/next-step1section.component';
import { NextStep2sectionComponent } from './next-step2section/next-step2section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    DeuxSectionComponent,
    FooterComponent,
    QuatriemSectionComponent,
    TroisiemSectionComponent,
    FeatureComponent,
    TokenComponent,
    Token1sectionComponent,
    Token2sectionComponent,
    NextStepComponent,
    NextStep1sectionComponent,
    NextStep2sectionComponent,

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
