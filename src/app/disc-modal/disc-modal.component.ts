import { Component } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';


@Component({
  selector: 'app-disc-modal',
  templateUrl: './disc-modal.component.html',
  styleUrls: ['./disc-modal.component.css'],
})
export class DiscModalComponent{
  public accepted: boolean = false;

  constructor(public modalRef: MDBModalRef) {
  }

  setAccepted(value: boolean){
    this.accepted = value;
  }

}
