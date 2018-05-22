import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  @Input() examGroup: FormGroup;
  @Input() examName: string;
  constructor() { }

  ngOnInit() {
  }

}
