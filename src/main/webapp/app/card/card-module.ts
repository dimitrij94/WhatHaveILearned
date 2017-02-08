import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [FlexLayoutModule.forRoot(), CommonModule, MaterialModule],
  declarations: [CardComponent],
  providers: [],
  exports: [CardComponent]
})
export class CardModule {

}
