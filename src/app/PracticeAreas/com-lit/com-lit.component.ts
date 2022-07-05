import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-com-lit',
  templateUrl: './com-lit.component.html',
  styleUrls: ['./com-lit.component.css']
})
export class ComLitComponent {

  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }

}
