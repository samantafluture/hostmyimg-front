import { IconModule } from './../components/icon/icon.module';
import { MessageModule } from './../components/message/message.module';
import { BoxModule } from '../components/box/box.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [MatIconModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules, BoxModule, MessageModule, IconModule],
  exports: [...materialModules, BoxModule, MessageModule, IconModule],
})
export class SharedModule {}
