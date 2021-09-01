import { SharedModule } from './shared/shared.module';
import { UploadModule } from './upload/upload.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxFilesizeModule } from 'ngx-filesize';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxDropzoneModule,
    NgxFilesizeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
