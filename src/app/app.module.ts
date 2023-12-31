import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RootStoreModule} from "./root-store/root-store.module";
import {ExampleStoreModule} from "./feature-example/data-access/example.store.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // NgRx
    RootStoreModule,
    ExampleStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
