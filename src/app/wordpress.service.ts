import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://www.posts.deaneandhinton.com/wp-json/wp/v2/posts', {
      params: {
        per_page: '100'
        /* This is set to 100 even though that many will likely never be needed to
        * prevent it from defaulting to 10, which is clearly not enough
        */
      }
    });
  }
  
  cleanup(content:string):string{
    var text = content.replace('<p>','');
    text = text.replace('</p>','');
    text = text.replace('<br />','');
    text = text.replace('&#8217;',"'");
    text = text.replace('&amp;',"&");
    text = text.replace('&#038;',"&");
    return text;
  }
}