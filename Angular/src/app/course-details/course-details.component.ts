import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  public courseId ;

  constructor(private _activaedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //let cId = parseInt(this._activaedRoute.snapshot.paramMap.get('id'));
   // this.courseId = cId ;
    this._activaedRoute.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.courseId = id;
    })

  }
  toPrevious(){
    let previousId = this.courseId -1;
    this.router.navigate(['/course', previousId]);
  }
  toNext(){
    let nextId = this.courseId + 1;
    this.router.navigate(['/course', nextId]);
  }
  goBack(){
   let selectedId = this.courseId ? this.courseId:null;
   this.router.navigate(['/course', {id:selectedId}]);
  }

}
