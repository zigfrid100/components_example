import {Component, Input , OnChanges} from '@angular/core';
import {Friend} from '../friends';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GithubService, GithubRepo} from '../github.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnChanges {

  @Input()
  friend: Friend;
  public githubRepos: GithubRepo[];

  constructor(private githubService: GithubService) {}

  ngOnChanges() {
    this.loadGithubRepos();
  }

  loadGithubRepos() {
    this.githubService.loadGithubRepos(
      this.friend.github)
      .subscribe(res => (this.githubRepos = res, console.log(res)));

  }
}


