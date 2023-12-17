import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    // TODO: use StoreDevtoolsModule based on environments (for local dev only)
    // isDevMode?.() ? StoreDevtoolsModule.instrument() : []
    StoreDevtoolsModule.instrument(),
  ]
})
export class RootStoreModule { }
