import {Component, Input} from '@angular/core';

@Component({
  selector: 'sb-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent {

  @Input()
  public title: string;
  @Input()
  public content: string;

}
