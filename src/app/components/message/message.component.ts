import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() msg_1 = '';
  @Input() msg_2 = '';

  constructor() {}

  ngOnInit(): void {}
}
