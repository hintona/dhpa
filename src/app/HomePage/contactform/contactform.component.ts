import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';

export class Case{
  constructor(value:number, viewValue:string){
    this.value = value;
    this.viewValue = viewValue;
  }
  value:number;
  viewValue:string;
}

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {

  selected = '0';
  
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }

}
