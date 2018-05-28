import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  @Input() examGroup: FormGroup;
  @Input() examName: string;
  @Output() onPointChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.examName);
  }
  pointChange(){
    this.onPointChange.emit();
  }
}
