import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/topics/topics.html'
})
export class Topics {

  constructor() {
    this.topics  = [{
      id: 0,
      title: 'Angular 2',
      description: 'Angular v2'
    }, {
      id: 1,
      title: 'Ionic 2',
      description: 'ionic ... en mieux'
    }];
  }

  startQuizz(topic) {
    console.log('Starting quizz on topic: ', topic.title);
  }
}
