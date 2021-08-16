import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  panelOpenState = false;
  @Input()
  user?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
