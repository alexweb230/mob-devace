import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { Image } from "tns-core-modules/ui/image";


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
      Image
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemModule { }
