import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DOMComponent{
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }

}
