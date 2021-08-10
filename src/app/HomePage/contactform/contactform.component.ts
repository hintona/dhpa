import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/wordpress.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
  styleUrls: ['./contactform.component.css'],
})

export class ContactformComponent {

  contactType = 0;
  clientCase = '0';
  clientName = '';
  clientNickname = '';
  clientPhone = '';
  clientEmail = '';
  phoneAvailability = '';
  caseDesc = '';
  
  posts$: Observable<any[]>;

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts();
  }

  changeVal(num:number){
    this.contactType = num;
  }

  getEmail(){
    let newString:string = "mailto:info@deaneandhinton.com?subject=New Client:" +
    this.clientName + 
    "&body=My name is " +
    this.clientName +
    " and my preferred name is " +
    this.clientNickname +
    ". My phone number is " + 
    this.clientPhone +
    " and my email is " + 
    this.clientEmail +
    ". ";

    if(this.contactType == 1){
      newString = newString + "I would prefer to be contacted by email. ";
    }
    if(this.contactType == 2){
      newString = newString + "I would prefer to be contacted by phone. My availability is as follows: " +
      this.phoneAvailability;
    }
    
    if(this.clientCase == '1'){
      newString = newString + "I am not sure what kind of case I have. Here is a brief summary of my case: "+
      this.caseDesc;
    }
    else{
      if(this.clientCase == '2'){
        newString = newString + "None of the case types listed fit my case. Here is a brief summary of my case: " +
        this.caseDesc;
      }
      else{
        newString = newString + "I have a " + this.clientCase + " case.";
      }
    }
    newString = newString + " Thank you, I hope to speak with you soon."
    return newString;
  }

  formCompleted():boolean{
    if(this.clientName != '' && this.clientEmail != '' && this.clientPhone != ''){
      if(this.contactType == 2){
        if(this.phoneAvailability != ''){
          if(this.clientCase == '1' || this.clientCase == '2'){
            if(this.caseDesc != ''){
              return true;
            }
            else return false;
          }
          else if(this.clientCase != '0') return true;
          else return false;
        }
        else return false;
      }
      else if(this.contactType == 1){
        if(this.clientCase == '1' || this.clientCase == '2'){
          if(this.caseDesc != ''){
            return true;
          }
          else return false;
        }
        else if(this.clientCase != '0') return true;
        else return false;
      }
      else return false;
    }
    else return false;
  }
}
