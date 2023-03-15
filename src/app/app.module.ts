import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http'
import { TodosEffect } from './store/effects/todo.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
