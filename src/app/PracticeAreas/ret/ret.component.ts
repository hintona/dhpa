import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-ret',
  templateUrl: './ret.component.html',
  styleUrls: ['./ret.component.css']
})
export class RETComponent{
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }
}
