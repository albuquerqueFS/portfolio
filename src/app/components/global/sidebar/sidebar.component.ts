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
    const designs = document.getElementById('designs');
    const socials = document.getElementById('socials');

    if (
      window.scrollY > about?.offsetTop!! &&
      window.scrollY < about?.offsetHeight!!
    ) {
      this.activeSection = 'about';
    } else if (
      window.scrollY > projects?.offsetTop!! - 100 &&
      window.scrollY < projects?.offsetTop!! + projects?.offsetHeight!!
    ) {
      this.activeSection = 'projects';
      // } else if (
      //   window.scrollY > designs?.offsetTop!! &&
      //   window.scrollY < designs?.offsetTop!! + designs?.offsetHeight!!
      // ) {
      //   this.activeSection = 'designs';
    } else if (
      window.scrollY >
      socials?.offsetTop!! - socials?.offsetHeight!!
    ) {
      this.activeSection = 'socials';
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.highlightNavbar();
  }
}
