import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  quizId:number=0;
  quizTitle:any;
  questions:any;

  constructor(private route:ActivatedRoute,private questionsService:QuestionsService) { }

  ngOnInit(): void {
    this.quizId=this.route.snapshot.params["id"];
    this.quizTitle=this.route.snapshot.params["title"];
    this.questionsService.getQuestionsOfQuiz(this.quizId).subscribe(
      (data:any) => this.questions=data,
      (error) => console.log(error)
    )
    console.log(this.quizId)
  }

}
