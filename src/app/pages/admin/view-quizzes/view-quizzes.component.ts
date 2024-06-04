import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizes:any

  constructor(private quiz:QuizService) { }

  ngOnInit(): void {
    this.quiz.Quizes().subscribe(
      (data:any)=>{
        this.quizes=data;
      },
      (error)=>{
        Swal.fire("Error","Error in loading data","error");
      }
    )
  }

 

}
