import {App, Platform, StatusBar} from 'ionic/ionic';
import {TopicsPage} from './topics/topics';


@App({
  templateUrl: 'app/app.html'
})

class BamersQuizz {
  constructor() {
    this.root = TopicsPage;
  }
}
