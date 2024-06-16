import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './../../../services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  quizes:any
  catId:number=0;

  constructor(private route:ActivatedRoute,private quizService:QuizService) { }

  ngOnInit(): void {
    this.catId = this.route.snapshot.params['catId'];
    if (this.catId==0) {
      this.quizService.Quizes().subscribe(
        (data:any)=>{
          this.quizes=data;
          console.log(this.quizes);
        },
        (error)=>{
          Swal.fire("Error","Error in loading data","error");
        }
      )
    }
  }

}
