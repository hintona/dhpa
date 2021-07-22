import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-practiceareas',
  templateUrl: './practiceareas.component.html',
  styleUrls: ['./practiceareas.component.css']
})
export class PracticeareasComponent {
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }
}
