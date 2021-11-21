import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getUserRepos(): Observable<any> {
    return this.http.get<any>(
      'https://api.github.com/users/albuquerquefs/repos'
    );
  }
}
