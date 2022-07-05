import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

@Component({
  selector: 'app-mfd',
  templateUrl: './mfd.component.html',
  styleUrls: ['./mfd.component.css']
})
export class MFDComponent{
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }
}
