import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  @Input() fileName!: string;
  @Input() fileSize!: string | number;

  constructor() { }

  ngOnInit(): void {
  }

}
