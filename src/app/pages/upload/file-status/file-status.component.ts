import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-status',
  templateUrl: './file-status.component.html',
  styleUrls: ['./file-status.component.css'],
})
export class FileStatusComponent implements OnInit {
  @Input()
  diameter!: number;

  @Input()
  mode!: string;

  @Input()
  value!: number;

  @Input()
  progress!: number;

  @Input()
  strokeWidth!: number;

  @Input()
  url!: string;

  constructor() {}

  ngOnInit(): void {}

}
