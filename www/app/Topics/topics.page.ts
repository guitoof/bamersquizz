import {Page, NavController} from 'ionic/ionic';
import {QuizzPage} from '../Quizzes/pages/quizz.page.ts';
import topics from '../../data/topics';

@Page({
  templateUrl: 'app/Topics/topics.page.html'
})
export default class TopicsPage {
  nav;
  topics;

  constructor(nav: NavController) {
    this.nav = nav;
    this.topics = topics;
  }

  startQuizz(topic) {
    this.nav.push(QuizzPage, {
      topicId: topic.id
    });
  }
}
