import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  gitRepos$!: Observable<any>;
  isDown = false;
  startX!: number;
  scrollLeft!: number;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.gitRepos$ = this.projectsService.getUserRepos();

    const slider = document.getElementById('big-cards');

    slider!.addEventListener('mousedown', (e: any) => {
      this.isDown = true;
      slider!.classList.add('active');
      this.startX = e?.pageX! - slider?.offsetLeft!;
      this.scrollLeft = slider!.scrollLeft;
    });
    slider!.addEventListener('mouseleave', () => {
      this.isDown = false;
      slider!.classList.remove('active');
    });
    slider!.addEventListener('mouseup', () => {
      this.isDown = false;
      slider!.classList.remove('active');
    });
    slider!.addEventListener('mousemove', (e: any) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - slider?.offsetLeft!;
      const walk = (x - this.startX) * 3; //scroll-fast
      slider!.scrollLeft = this.scrollLeft - walk;
      console.log(walk);
    });
  }
}
