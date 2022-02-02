import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component'
import { TokenComponent } from './token/token.component';
import { NextStepComponent } from './next-step/next-step.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeatureComponent
  },
  {
    path: 'feature',
    component: FeatureComponent

  },
  {
    path: 'token',
    component: TokenComponent
  },
  {
    path: 'nextstep',
    component: NextStepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
