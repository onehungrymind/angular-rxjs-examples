import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, repeat, startWith, take } from 'rxjs/operators';
import * as $ from 'jquery';

const SPACESHIP_OFFSET = 40;
const SHOT_OFFSET = 2;

@Component({
  selector: 'app-game',
  styles: [`
    mat-card {
      width: 400px;
      box-sizing: border-box;
      margin: 16px;
      background: white url('assets/stars.jpg') repeat-y 0 0;
      background-size: cover;
      overflow: hidden;
    }

    .card-container {
      display: flex;
      flex-flow: row wrap;
      position: fixed;
      top: 70px;
      bottom: 0;
    }
  `],
  template: `
    <div class="card-container">
      <mat-card [style.background-position-y]="backgroundPosition + 'px'">
        <div #spaceship class="spaceship"
             [style.left]="spaceshipPosition.x + 'px'"
             [style.top]="spaceshipPosition.y + 'px'">
        </div>
        <app-shot *ngFor="let shot of shots"
                  [style.left]="shot?.x + 'px'"
                  [style.top]="shot?.y + 'px'">
        </app-shot>
      </mat-card>
    </div>
  `
})
export class GameComponent implements OnInit {
  backgroundPosition = 0;
  spaceshipPosition: any = {};
  shots: any[] = [];

  ngOnInit() {
    interval(10)
      .pipe(
        startWith(1100),
        take(1178),
        repeat()
      )
      .subscribe(count => this.backgroundPosition = count);

    fromEvent(document, 'click')
      .pipe(map(this.parseEvent))
      .subscribe(shot => this.shots = [...this.shots, shot]);

    fromEvent(document, 'mousemove')
      .pipe(map(this.parseEvent))
      .subscribe(event => this.spaceshipPosition = event);
  }

  parseEvent(event) {
    const offset = $(event.target).offset();
    const typeOfOffsetLeft = event.type === 'click' ? SHOT_OFFSET : SPACESHIP_OFFSET;

    return {
      x: event.clientX - offset.left - typeOfOffsetLeft,
      y: event.clientY - offset.top - SPACESHIP_OFFSET
    };
  }
}
