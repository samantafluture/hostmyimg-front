import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropzoneComponent } from './dropzone/dropzone.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxFilesizeModule } from 'ngx-filesize';
import { FilesComponent } from './files/files.component';
import { StatusComponent } from './status/status.component';
import { LoadingComponent } from './loading/loading.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [DropzoneComponent, FilesComponent, StatusComponent, LoadingComponent, LinkComponent],
  imports: [CommonModule, NgxDropzoneModule, NgxFilesizeModule, SharedModule],
  exports: [DropzoneComponent],
})
export class UploadModule {}
