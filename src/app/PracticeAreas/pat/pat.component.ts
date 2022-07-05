import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-pat',
  templateUrl: './pat.component.html',
  styleUrls: ['./pat.component.css']
})
export class PatComponent{
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }
}
