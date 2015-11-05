import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/topics/topics.html'
})
export class Topics {
  topics
  constructor() {
    this.topics  = [{
      id: 0,
      title: 'Angular 2',
      description: 'Angular v2',
      icon: 'img/topics/angular2.png'
    }, {
      id: 1,
      title: 'Ionic 2',
      description: 'ionic en mieux',
      icon: 'img/topics/ionic2.png'
    }];
  }

  startQuizz(topic) {
    console.log('Starting quizz on topic: ', topic.title);
  }
}
