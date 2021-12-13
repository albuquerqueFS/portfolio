import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  activeSection = '';

  constructor() {}

  ngOnInit(): void {
    this.activeSection = 'about';
  }

  goTo(section: string): void {
    document.getElementById(section)?.scrollIntoView();
    this.activeSection = section;
  }

  highlightNavbar() {
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const blog = document.getElementById('blogs');

    const projectOffsetTop = projects?.offsetTop!! * 0.8;

    if (
      window.scrollY > about?.offsetTop!! * 0.8 &&
      window.scrollY < about?.offsetHeight!! * 0.8!!
    ) {
      this.activeSection = 'about';
    } else if (
      window.scrollY > projectOffsetTop &&
      window.scrollY < projects?.offsetTop!! * 0.8 + projects?.offsetHeight!!
    ) {
      this.activeSection = 'projects';
      // } else if (
      //   window.scrollY > designs?.offsetTop!! &&
      //   window.scrollY < designs?.offsetTop!! + designs?.offsetHeight!!
      // ) {
      //   this.activeSection = 'designs';
    } else if (
      window.scrollY > blog?.offsetTop!! * 0.8 - blog?.offsetHeight!! &&
      window.scrollY < blog?.offsetTop!! * 0.8 + blog?.offsetHeight!!
    ) {
      this.activeSection = 'blogs';
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.highlightNavbar();
  }
}
