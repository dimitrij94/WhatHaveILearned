import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./cards-overview/card.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CardEditComponent} from "./cards-edit/card-edit.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [FlexLayoutModule, CommonModule, MaterialModule.forRoot(), FormsModule],
  declarations: [CardComponent, CardEditComponent],
  providers: [],
  exports: [CardComponent, CardEditComponent]
})
export class CardModule {

}
