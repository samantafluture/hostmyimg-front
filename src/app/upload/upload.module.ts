import { MessageModule } from './../components/message/message.module';
import { BoxModule } from './../components/box/box.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { DropzoneComponent } from './dropzone/dropzone.component';

@NgModule({
  declarations: [DropzoneComponent],
  imports: [CommonModule, UploadRoutingModule, BoxModule, MessageModule],
  exports: [DropzoneComponent],
})
export class UploadModule {}
