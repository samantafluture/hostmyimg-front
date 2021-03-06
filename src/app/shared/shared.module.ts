import { FooterModule } from './footer/footer.module';
import { WrapperModule } from './../components/wrapper/wrapper.module';
import { MessageModule } from '../components/message/message.module';
import { BoxModule } from '../components/box/box.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [MatIconModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules,
    BoxModule,
    MessageModule,
    WrapperModule,
    FooterModule,
  ],
  exports: [
    ...materialModules,
    BoxModule,
    MessageModule,
    WrapperModule,
    FooterModule,
  ],
})
export class SharedModule {}
