import { UploadService } from '../../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css'],
})
export class DropzoneComponent implements OnInit {
  files: File[] = [];
  file!: File;
  uploadProgress = 0;
  url: string = '';
  failed: boolean = false;

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onSelect(event: any) {
    if (this.files.push(...event.addedFiles)) {
      console.log('## addedFiles ## ', ...event.addedFiles);
      this.upload();
    } else {
      console.log('## rejectedFiles ## ', ...event.rejectedFiles);
      this.files.push(...event.rejectedFiles);
    }
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload() {
    if (this.files) {
      for (let i = 0; i < this.files.length; i++) {
        this.uploadService.uploadFile(this.files[i]).subscribe(
          (event: HttpEvent<any>) => {
            if (event.type === HttpEventType.UploadProgress) {
              const total = event.total ?? 1;
              this.uploadProgress = Math.round(100 * (event.loaded / total));
              console.log('## uploadProgress ## ', this.uploadProgress);
            }
          },
          (error) => {
            console.log(error), (this.failed = true);
          }
        );
      }
    }
  }
}
