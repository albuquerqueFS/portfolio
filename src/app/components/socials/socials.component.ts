import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.sass'],
})
export class SocialsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openUrl(link: string): void {
    window.open(link, '_blank');
  }
}
