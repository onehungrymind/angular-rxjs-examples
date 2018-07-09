import { Component, OnInit, ViewChild } from '@angular/core';

import 'gsap';
import * as $ from 'jquery';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-simple-animation',
  template: `<div #ball class="ball"></div>`
})
export class SimpleAnimationComponent implements OnInit {
  @ViewChild('ball') ball;

  ngOnInit() {
    const BALL_OFFSET = 50;
    const CURSOR_OFFSET = 20;

    fromEvent(document, 'click')
      .pipe(
        map((event: any) => {
          const offset = $(event.target).offset();
          return {
            x: event.clientX - offset.left - BALL_OFFSET - CURSOR_OFFSET,
            y: event.pageY - offset.top - BALL_OFFSET - CURSOR_OFFSET
          };
        })
      )
      .subscribe(props => TweenMax.to(this.ball.nativeElement, 1, props));
  }
}
