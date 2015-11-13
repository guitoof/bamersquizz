import {Page, NavController, NavParams} from 'ionic/ionic';
import TopicsPage from '../../Topics/topics.page';

@Page({
  templateUrl: 'app/Quizzes/templates/quizz-results.page.html',
})

export class QuizzResultsPage {
  nav;
  quizz;

  constructor(nav: NavController, params: NavParams) {
    this.quizz = params.get('quizz');
    this.nav = nav;
    this.nav.pop();
  }

  onHomeClicked(event) {
    this.nav.setRoot(TopicsPage);
  }

}
