import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropzoneComponent } from './dropzone/dropzone.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxFilesizeModule } from 'ngx-filesize';

@NgModule({
  declarations: [DropzoneComponent],
  imports: [CommonModule, NgxDropzoneModule, NgxFilesizeModule, SharedModule],
  exports: [DropzoneComponent],
})
export class UploadModule {}
