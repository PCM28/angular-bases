import { NgModule } from "@angular/core";
import { CounterSecondPageComponent } from "./components/counter/counter-second-page.component";

@NgModule({
  declarations: [
    CounterSecondPageComponent
  ],
  exports: [
    CounterSecondPageComponent
  ],
})

export class CounterSecondModule {}
