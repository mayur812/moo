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

  constructor(private location:LocationStrategy,private route:ActivatedRoute,private questionsService:QuestionsService) { }

  quizId = this.route.snapshot.params['quizId'];

  questions:any;

  ngOnInit(): void {
    this.preventBackButton()
    this.questionsService.getQuestionsOfQuizForTest(this.quizId).subscribe(
      (data:any) => {
        this.questions=data
      
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
}
