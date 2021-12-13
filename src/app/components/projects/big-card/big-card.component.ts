import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.sass'],
})
export class BigCardComponent implements OnInit {
  @Input() src!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() link!: string;

  constructor() {}

  ngOnInit(): void {}

  openUrl(): void {
    window.open(this.link, '_blank');
  }
}
