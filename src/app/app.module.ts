import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoToHomeComponent } from '@shared/components/go-to-home/go-to-home.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { ToastComponent } from '@shared/components/toast/toast.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GoToHomeComponent,
    ToastComponent,
    LoaderComponent,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
