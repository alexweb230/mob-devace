import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import {NativeScriptUISideDrawerModule} from 'nativescript-ui-sidedrawer/angular';
import { SidedrawerComponent } from './sidedrawer/sidedrawer.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import {YoutubePlayerModule} from 'nativescript-youtubeplayer/angular';



// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        // YoutubePlayerModule

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SidedrawerComponent,
        BottomnavComponent,

    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
