import { NgModule } from '@angular/core';
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { InputsModule } from "@progress/kendo-angular-inputs";



@NgModule({
  declarations: [],
  imports: [
    LabelModule,
    DropDownsModule,
    InputsModule
  ],
  exports: [
    LabelModule,
    DropDownsModule,
    InputsModule
  ]
})
export class SharedModule { }
