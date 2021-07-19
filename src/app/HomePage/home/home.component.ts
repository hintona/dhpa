import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }

  cleanup(content:string):string{
    var text = content.replace('<p>','');
    text = text.replace('</p>','');
    text = text.replace('<br />','');
    text = text.replace('&#8217;',"'");
    text = text.replace('&#038;',"&");
    return text;
  }
}
