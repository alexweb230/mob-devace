import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {NativeScriptUISideDrawerModule} from "nativescript-ui-sidedrawer/angular";

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
      NativeScriptUISideDrawerModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
