import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public course =[
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "React"},
    {"id": 3, "name": "Vue"},
    {"id": 4, "name": "Bootstrap"},
    {"id": 5, "name": "Mysql"},
  ]
    

  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(x){
    this.router.navigate(['/course', x.id]);
  }

}
