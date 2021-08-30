import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.css'],
})
export class FileInfoComponent implements OnInit {
  file = {
    name: 'arquivo-teste.jpg',
    size: '100k',
  };

  constructor() {}

  ngOnInit(): void {}
}
