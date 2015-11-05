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

// @App({
//   template: '<ion-nav [root]="root"></ion-nav>',
// })
//
// export class App {
//   constructor(platform: Platform) {
//     this.platform = platform;
//     this.initializeApp();
//     this.root = TabsPage;
//   }
//
//   initializeApp() {
//     this.platform.ready().then(() => {
//       console.log('Platform ready');
//       StatusBar.setStyle(StatusBar.DEFAULT);
//     });
//   }
// }
