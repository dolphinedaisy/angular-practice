import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, forkJoin, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseURl = 'https://jsonplaceholder.typicode.com';
  users = this.baseURl + '/users';

  constructor(private http: HttpClient) {}

  searchUser(id: number) {
    return this.http.get(this.users + '/' + id);
  }

  listStories(userId: number) {
    return this.http.get(this.baseURl + '/posts/?userId=' + userId);
  }

  getStory(storyId: number) {
    return this.http.get(this.baseURl + '/posts/' + storyId);
  }

  postStory(userId: number) {
    return this.http.post(this.baseURl + '/posts/', {
      title: 'foo',
      body: 'bar',
      userId: userId,
    });
  }

  delteStory(storyId: number) {
    return this.http.delete(this.baseURl + '/posts/' + storyId);
  }

  callOne() {
    const arrUrl = [
      this.http.get(this.users + '/1'),
      this.http.get(this.users + '/2'),
      this.http.get(this.users + '/3'),
    ];

    forkJoin(arrUrl).pipe(
      map(([uOne, uTwo, uThree, uFour]) => {
        return { uOne, uTwo, uThree, uFour };
      })
    );
  }
}
