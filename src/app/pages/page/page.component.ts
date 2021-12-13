import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass'],
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const inViewport = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL);
    });
  }
}
