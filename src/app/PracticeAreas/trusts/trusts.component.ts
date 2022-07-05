import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-trusts',
  templateUrl: './trusts.component.html',
  styleUrls: ['./trusts.component.css']
})
export class TrustsComponent{
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }
}
