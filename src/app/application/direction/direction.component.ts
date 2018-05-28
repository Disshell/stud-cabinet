import {Component, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {EventEmitter} from "@angular/core";
import {MatOptionSelectionChange} from "@angular/material";

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  directionsJSON = `
  {
    "Химико-технологический факультет": [
        { "name":"Фундаментальная и прикладная химия", "exams":[ "Химия", "Биология", "Русский язык" ] },
        { "name":"Химическая технология", "exams":[ "Математика", "Химия", "Русский язык" ] },
        { "name":"Энерго и ресурсосберегающие процессы в химической технологии, нефтехимии и биотехнологии", "exams":[ "Математика", "Биология", "Русский язык"] }
    ]
  }`;
  directions =JSON.parse(this.directionsJSON);
  selectedFaculty;
  @Input() directionGroup: FormGroup;
  @Input() index: number;
  @Output() onDeletedDirection = new EventEmitter<number>();
  @Output() onAddedExam = new EventEmitter<MatOptionSelectionChange>();
  constructor() { }

  ngOnInit() {
  }
  removeDirection(){
    this.onDeletedDirection.emit(this.index);
  }
  addExams(event){
    if(event.isUserInput == true){
      this.onAddedExam.emit(event);
    }

  }
}
