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

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.gitRepos$ = this.projectsService.getUserRepos();
  }
}
