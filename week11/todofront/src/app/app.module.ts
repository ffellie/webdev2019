import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainService } from 'src/services/main.service';
import { ProviderService } from './provider.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MainService,
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
