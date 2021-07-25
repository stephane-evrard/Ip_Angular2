import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github.service";


@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery:string = '';
  public githubProfile: any;
  public githubRepos:any = [];
  public errorMessage:string = '';

  constructor(private githubService:GithubService) { }

  public searchUser(){
    if(this.githubUserQuery === undefined || this.githubUserQuery == ''){
      alert('Please enter a User Name !');
      return;
    }
    // to get the github profile
    this.githubService.getProfile(this.githubUserQuery).subscribe((data) =>{
      this.githubProfile = data;
    } , (error) =>{
        this.errorMessage = error;
    });

    // get the github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe((data) => {
      this.githubRepos = data;

    } , (error) => {
      this.errorMessage = error;
    });

  }

  ngOnInit(): void {
  }

}
