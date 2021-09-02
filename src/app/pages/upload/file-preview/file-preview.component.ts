import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.css'],
})
export class FilePreviewComponent implements OnInit {
  url: string = 'https://via.placeholder.com/500x500';

  constructor() {}

  ngOnInit(): void {}
}
