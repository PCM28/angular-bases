import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { CounterSecondModule } from './pages/counter-second/counter-second.module';
import { HeroesModule } from './pages/heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterSecondModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
