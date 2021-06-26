import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//TODO: fix formatting issue where it displays html tags in content

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('http://www.posts.deaneandhinton.com/wp-json/wp/v2/posts', {
      params: {
        per_page: '100'
        /* This is set to 100 even though that many will likely never be needed to
        * prevent it from defaulting to 10, which is clearly not enough
        */
      }
    });
  }
}