import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  public getQuestionsOfQuiz (quizId:number) {
    return this.http.get(`${baseUrl}/questions/quiz/${quizId}`)
  }

}
