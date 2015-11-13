import {App, Platform, StatusBar} from 'ionic/ionic';
import TopicsPage from './Topics/topics.page';

@App({
  templateUrl: 'app/app.html'
})

class BamersQuizzApp {
  constructor() {
    this.root = TopicsPage;
  }
}
