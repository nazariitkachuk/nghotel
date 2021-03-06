import { Component, OnInit, ViewChild,AfterContentInit, Input, ElementRef } from '@angular/core';

import {MatDatepickerModule, MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatGridList,MatFormFieldModule } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import {FormControl, Validators, FormGroup, AbstractControl} from '@angular/forms';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {
  @ViewChild('grid')  grid: MatGridList;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 2,
    xs: 1
  };

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(private observableMedia: ObservableMedia) { }
  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required]);
  roomType = new FormControl('', [Validators.required]);
  adultsNumber= new FormControl('', [Validators.required]);
  childrenNumber= new FormControl('', [Validators.required]);
  events: string[] = [];
  serializedDeparturePickerDate = new FormControl(new Date());
  serializedArrivalPickerDate = new FormControl(new Date());


//  checkDates(){
//    if(this.serializedArrivalPickerDate.value<this.serializedDeparturePickerDate.value){
//      console.log("OK");
//    }else{console.log("NIE OK");}
//  }
//  https://www.youtube.com/watch?v=fvaCTHb6pUQ     how to compare dates
  getEmailErrorMessage() {
    // this.checkDates();
    // console.log(this.serializedArrivalPickerDate.value);
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getAdultsNumberErrorMessage() {
    return this.adultsNumber.hasError('required') ? 'You must enter a value' :
        '';
  }
  getChildrenNumberErrorMessage() {
    return this.childrenNumber.hasError('required') ? 'You must enter a value' :
        '';
  }

  getFNameErrorMessage() {
    return this.firstName.hasError('required') ? 'You must enter a value' :
        '';
  }
  getPhoneNumberNameErrorMessage() {
    return this.phoneNumber.hasError('required') ? 'You must enter a value' :
        '';
  }
  getLNameErrorMessage() {
    return this.lastName.hasError('required') ? 'You must enter a value' :
        '';
  }

  getRoomTypeErrorMessage() {
    return this.roomType.hasError('required') ? 'You must enter a value' :
        '';
  }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
