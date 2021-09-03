import { environment } from 'src/environments/environment';
import { UploadService } from '../../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

const url = environment.bucketUrl;

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css'],
})
export class DropzoneComponent implements OnInit {
  files: File[] = [];
  file!: File;
  failed!: boolean;
  isFileLimit!: boolean;
  uploadProgress = 0;
  imageUrl = url;

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onSelect(event: any) {
    if (this.files.push(...event.addedFiles)) {
      this.files.length < 6 ? this.upload() : this.isFileLimit = true;
    } else {
      this.files.push(...event.rejectedFiles);
      this.failed = true;
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
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}
