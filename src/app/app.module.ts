import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgParticlesModule } from 'ng-particles';
import { AnimatedCardComponent } from './@shared/components/animated-card/animated-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './@shared/components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedCardComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
