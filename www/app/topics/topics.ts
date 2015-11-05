import {Page, NavController} from 'ionic/ionic';
import {QuizzItemPage} from "../quizz-items/quizz-item";

@Page({
  templateUrl: 'app/topics/topics.html'
})
export class TopicsPage {
  nav
  topics
  constructor(nav: NavController) {
    this.nav = nav;
    this.topics  = [{
      id: 0,
      title: 'Angular 2',
      description: 'Angular v2',
      icon: 'img/topics/angular2.png',
      quizzItems: [{
        question: 'What is the color of the angular logo ?',
        choices: [
          'green',
          'red',
          'blue',
          'yellow'
        ]
      },
      {
        question: 'Who is the creator and maintainor of Angular 2 ?',
        choices: [
          'Facebook',
          'Apple',
          'IBM',
          'Google'
        ]
      }]
    }, {
      id: 1,
      title: 'Ionic 2',
      description: 'ionic en mieux',
      icon: 'img/topics/ionic2.png',
      quizzItems: [{
        question: 'What is the color of the ionic logo ?',
        choices: [
          'green',
          'red',
          'blue',
          'yellow'
        ]
      },
      {
        question: 'What is the prefix used for ionic directives ?',
        choices: [
          'ng',
          'div',
          'nav',
          'ion'
        ]
      }]
    }];
  }

  startQuizz(topic) {
    this.nav.push(QuizzItemPage, {
      quizzItem: topic.quizzItems[0]
    })
  }
}
