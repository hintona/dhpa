import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from './wordpress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dhpa';
  year = new Date().getFullYear();
  expanded: boolean;
  
  posts$: Observable<any[]>;
  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
    this.expanded = false;
  }

  toggleClosed(){
    if(this.expanded){
      this.expanded = false;
    }
    else if(!this.expanded){
      this.expanded = true;
    }
  }
}
