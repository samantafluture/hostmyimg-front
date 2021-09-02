import { ImageUploaderModule } from './pages/image-uploader/image-uploader.module';
import { SharedModule } from './shared/shared.module';
import { UploadModule } from './pages/upload/upload.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxFilesizeModule } from 'ngx-filesize';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxDropzoneModule,
    NgxFilesizeModule,
    ImageUploaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
