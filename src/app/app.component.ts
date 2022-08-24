import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from './wordpress.service';
import { DiscModalComponent } from './disc-modal/disc-modal.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dhpa';
  year = new Date().getFullYear();
  expanded: boolean;
  modalRef: MDBModalRef | null = null;
  visited: boolean = false;
  
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService, private modalService: MDBModalService) {
    this.posts$ = this.wp.getPosts();
    this.expanded = true;
  }
  ngOnInit(): void {
    if(!this.visited){
      this.openModal();
    }
  }

  openModal() {
    this.modalRef = this.modalService.show(DiscModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: 'modal-center',
      containerClass: 'right',
      animated: true
    });
    this.visited = true;
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
