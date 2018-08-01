import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: Http) { }

  loadGithubRepos(githubUser: string) {
    return this.http.get('https://api.github.com/users/' + githubUser + '/repos')
      .map(res => res.json() as GithubRepo[]);
  }
}

export interface GithubRepo {
  name: string;
  language: string;
}
