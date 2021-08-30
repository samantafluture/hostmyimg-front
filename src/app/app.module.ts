import { UploadModule } from './upload/upload.module';
import { BoxModule } from './components/box/box.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BoxModule, UploadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
