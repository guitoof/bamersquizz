import {App, Platform, StatusBar} from 'ionic/ionic';
import {Topics} from './topics/topics';


@App({
  templateUrl: 'app/app.html'
})

class BamersQuizz {
  constructor() {
    this.root = Topics;
  }
}
