import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2'
import { title } from 'process';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
isNotSubmit: boolean=true;

  constructor(private location:LocationStrategy,private route:ActivatedRoute,private questionsService:QuestionsService) { }

  quizId = this.route.snapshot.params['quizId'];

  questions:any;
  marksAccquired=0;
  correctAnswers=0;
  attempted=0; 
  quizResult:any;

  ngOnInit(): void {
    this.preventBackButton()
    this.questionsService.getQuestionsOfQuizForTest(this.quizId).subscribe(
      (data:any) => {
        this.questions=data
        this.questions.forEach((element:any) => {
          element['givenAnswer']='';
        });
        
        
      },
      (_error) => {
        Swal.fire("Error","Something went wrong please log out and attempt the quiz again","error")
      }
    )
  }
  preventBackButton() {
    history.pushState(null, '',location.href);
    this.location.onPopState(()=>history.pushState(null, '',location.href))
  }

  submitQuiz() {
    Swal.fire({
      title:"Do you want to start quiz?",
      showCancelButton:true,
      confirmButtonText:'Submit',
      icon:"question"
    }).then((result) => {
      if (result.isConfirmed) {
        this.isNotSubmit=false
        this.questions.forEach((element:any) => {
          if (element.givenAnswer != null && element.givenAnswer != '') { this.attempted++}
        });
        this.questionsService.result(this.questions).subscribe (
          (data:any) => {
            this.quizResult=data;
            this.correctAnswers=this.quizResult.correctAnswers
            this.marksAccquired=this.quizResult.marksAcquired
            console.log(this.attempted,this.correctAnswers,this.marksAccquired)
            
          },
          (error) => {
            Swal.fire("Error","Something went wrong please log out and attempt the quiz again","error")
          }
        )
        
      }
    })
  }
}
