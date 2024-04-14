import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-rxjs-demo-component',
  templateUrl: './rxjs-demo-component.component.html',
  styleUrl: './rxjs-demo-component.component.scss',
})
export class RxjsDemoComponentComponent {
  currentUserID = 2;

  constructor(private service: ApiServiceService) {}

  ngOnInit() {
    this.getCurrentUser();
    this.getStoryList();
    this.getStoryById();
    this.postUserStory();
    this.deleteUserStory();
  }

  getCurrentUser() {
    const results = this.service.searchUser(this.currentUserID);
    results.subscribe((res) => {
      console.log('Current User : ', res);
    });
  }

  getStoryList() {
    const stories = this.service
      .listStories(this.currentUserID)
      .subscribe((res) => {
        console.log('Strory List of Current User : ', res);
      });
  }

  getStoryById() {
    const storyID = 16;
    const story = this.service.getStory(storyID).subscribe((res) => {
      console.log('storyID : ' + storyID + '---> ', res);
    });
  }

  postUserStory() {
    const x = this.service.postStory(this.currentUserID).subscribe((res) => {
      console.log('Posted this : ', res);
    });
  }

  deleteUserStory() {
    const d = this.service.delteStory(11).subscribe((res) => {
      console.log('Deleted Story res : ', res);
    });
  }
}
