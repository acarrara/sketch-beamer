import {Component} from '@angular/core';
import {CardModule} from '../card/card.module';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  modules = [
    CardModule
  ];

}
