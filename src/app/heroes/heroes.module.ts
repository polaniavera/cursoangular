import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
