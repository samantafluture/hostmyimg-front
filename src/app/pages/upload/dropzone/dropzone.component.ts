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

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onSelect(event: any) {
    console.log('## event ## ', event);
    this.files.push(...event.addedFiles);
    console.log('## array ## ', ...event.addedFiles);
    this.upload();
  }

  onRemove(event: any) {
    console.log(event);
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
          (error) => console.log(error)
        );
        console.log(`## file upload with success ##`);
      }
    }
  }

  //   this.file = this.files[0];
  //   this.uploadService.uploadFile(this.file).subscribe(
  //     (event: HttpEvent<any>) => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         const total = event.total ?? 1;
  //         this.uploadProgress = Math.round(100 * (event.loaded / total));
  //         console.log('## uploadProgress ## ', this.uploadProgress);
  //       }
  //     },
  //     (error) => console.log(error)
  //   );
  //   console.log(`## file '${this.file.name}' upload with success ##`);
  // }
}
