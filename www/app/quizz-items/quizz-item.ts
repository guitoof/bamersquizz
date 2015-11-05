import {Page, NavParams} from 'ionic/ionic';
import {Injectable} from "angular2/angular2";
@Injectable()
@Page({
  templateUrl: 'app/quizz-items/quizz-item.html'
})

export class QuizzItemPage {
  quizzItem
  constructor(params: NavParams) {
    this.quizzItem = params.get('quizzItem');
  }

}
