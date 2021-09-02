import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileInfoComponent } from './file-info/file-info.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { FileStatusComponent } from './file-status/file-status.component';
import { BrowseInputComponent } from './browse-input/browse-input.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxFilesizeModule } from 'ngx-filesize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropzoneComponent,
    FileListComponent,
    FileInfoComponent,
    FilePreviewComponent,
    FileStatusComponent,
    BrowseInputComponent,
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    NgxDropzoneModule,
    NgxFilesizeModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DropzoneComponent,
    FileListComponent,
    FileInfoComponent,
    FilePreviewComponent,
    BrowseInputComponent,
  ],
})
export class UploadModule {}
