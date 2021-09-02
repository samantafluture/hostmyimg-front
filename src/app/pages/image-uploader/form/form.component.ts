import { Upload } from './../../../interfaces/upload';
import { UploadService } from './../../../services/upload.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  imgUploaderForm!: FormGroup;
  file!: File;
  uploads: Upload[] = [];
  preview!: string;
  uploadProgress = 0;
  url = '';

  constructor(
    private uploadService: UploadService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.imgUploaderForm = this.formBuilder.group({
      file: ['', Validators.required],
    });
  }

  upload() {
    this.uploadService.uploadFile(this.file).subscribe(
      (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          const total = event.total ?? 1;
          this.uploadProgress = Math.round(100 * (event.loaded / total));
        }
      },
      (error) => console.log(error)
    );
  }

  selectImages(selectedFile: any): void {
    const [file] = selectedFile?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }

  getFiles() {
    this.uploadService.getAllFiles().subscribe(
      (data) => (this.uploads = data)
    );
  }
}
