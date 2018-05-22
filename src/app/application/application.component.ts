import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {DbService} from "../db.service";




@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  applicationForm: FormGroup = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('',Validators.required),
      'secondName': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'dateOfBirth': new FormControl('', Validators.required),
      'birthplace': new FormControl('', Validators.required),
      'citizenship': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'homePhone': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'passport': new FormGroup({
        'passportSeries': new FormControl('', Validators.required),
        'passportNumber': new FormControl('', Validators.required),
        'passportDepartment': new FormControl('', Validators.required),
        'passportDate': new FormControl('', Validators.required)
      }),
      'regAddress': new FormGroup({
        'regAddressZipCode': new FormControl('', Validators.required),
        'regAddressCountry': new FormControl('', Validators.required),
        'regAddressRegion': new FormControl('', Validators.required),
        'regAddressDistrict': new FormControl('', Validators.required),
        'regAddressCity': new FormControl('', Validators.required),
        'regAddressStreet': new FormControl('', Validators.required),
        'regAddressHouse': new FormControl('', Validators.required),
        'regAddressHousing': new FormControl(''),
        'regAddressApartment': new FormControl('', Validators.required)
      }),
      'factAddress': new FormGroup({
        'factAddressZipCode': new FormControl('', Validators.required),
        'factAddressCountry': new FormControl('', Validators.required),
        'factAddressRegion': new FormControl('', Validators.required),
        'factAddressDistrict': new FormControl('', Validators.required),
        'factAddressCity': new FormControl('', Validators.required),
        'factAddressStreet': new FormControl('', Validators.required),
        'factAddressHouse': new FormControl('', Validators.required),
        'factAddressHousing': new FormControl(''),
        'factAddressApartment': new FormControl('', Validators.required)
      }),
      'directions' : new FormArray([
         new FormGroup({
            "faculty": new FormControl('', Validators.required),
            "direction": new FormControl('', Validators.required)
        })
      ]),
      'exams' : new FormArray([]),
    }
  );

  currentExams: Array<string> = [];
  constructor(private dbService: DbService) { }

  ngOnInit() {  }

  onSubmit(){
    const application = this.applicationForm.value;
    console.log(application);
    console.log(this.applicationForm);
    this.dbService.createApplication(application)
      .subscribe();
  }

  addDirection(){
    const fg = new FormGroup({
      "faculty": new FormControl('', Validators.required),
      "direction": new FormControl('', Validators.required)
    });
    fg.setParent(<FormArray>this.applicationForm.controls.directions);
    this.applicationForm.controls.directions['controls'].push(fg);
  }

  removeDirection(index: number){
    const control = <FormArray>this.applicationForm.controls.directions;
    control.removeAt(index);
  }

  addExam(event){
    console.log(event);
    let exams =  event.source.value['exams'];
    for(let i = 0;i<exams.length; i++)
    if(this.currentExams.lastIndexOf(exams[i])==-1){
      this.currentExams.push(exams[i]);
      const fg = new FormGroup({
          "exam": new FormControl(exams[i], Validators.required),
          "point": new FormControl(0, Validators.required)
        });
        fg.setParent(<FormArray>this.applicationForm.controls.exams);
        this.applicationForm.controls.exams['controls'].push(fg);
    }
  }



}
