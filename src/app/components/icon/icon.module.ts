import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
  exports: [IconComponent],
})
export class IconModule {}
