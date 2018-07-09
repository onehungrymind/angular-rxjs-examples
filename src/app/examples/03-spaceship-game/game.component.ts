import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, merge } from 'rxjs';
import { filter, map, mapTo, repeat, scan, startWith, take } from 'rxjs/operators';

const SPACESHIP_WIDTH_OFFSET = 40;
const SPACESHIP_HEIGHT_OFFSET = 100;

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
export class GameComponent implements OnInit, OnDestroy {
  backgroundPosition = 0;
  spaceshipPosition: any = {};
  shots: any[] = [];

  background$;
  shots$;
  leftArrow$;
  rightArrow$;

  ngOnInit() {
    this.background$ = interval(10)
      .pipe(
        startWith(1100),
        take(1178),
        repeat()
      )
      .subscribe(count => this.backgroundPosition = count);

    this.shots$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'Control'),
        map((event: KeyboardEvent) => ({
          x: this.spaceshipPosition.x + SPACESHIP_WIDTH_OFFSET,
          y: this.spaceshipPosition.y
        }))
      )
      .subscribe(shot => this.shots = [...this.shots, shot]);

    this.leftArrow$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'ArrowLeft'),
        mapTo(position => this.decrement(position, 'x', 10))
      );

    this.rightArrow$ = fromEvent(document, 'keydown')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'ArrowRight'),
        mapTo(position => this.increment(position, 'x', 10))
      );

    merge(this.leftArrow$, this.rightArrow$)
      .pipe(
        startWith({x: 100, y: 700}),
        scan((acc, curr: Function) => curr(acc))
      )
      .subscribe(position => this.spaceshipPosition = position);
  }

  ngOnDestroy() {
    this.background$.unsubscribe();
    this.shots$.unsubscribe();
  }

  increment(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] + value});
  }

  decrement(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] - value});
  }
}
