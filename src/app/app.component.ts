import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'AAAAAAAAAAAA';

  ngOnInit(): void {}

  goTo(section: string): void {
    document.getElementById(section)?.scrollIntoView();
  }
}
