import { Component, OnInit, ViewChild } from '@angular/core';
import { map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import * as $ from "jquery";
import { fromEvent } from 'rxjs/index';

@Component({
  selector: 'app-location',
  styles: [`
    .card-container {
      position:fixed;
      top: 70px;
      bottom: 0;
      left: 0;
      right: 0;
    }
    mat-card {
      width: 100%;
      box-sizing: border-box;
      margin: 16px;
      background: #fff url(assets/london-map.jpg) no-repeat center center;
    }
    .card-container {
      display: flex;
      flex-flow: row wrap;
    }
    `],
  template: `
    <div class="card-container">
        <mat-card>
          <div #pin class="pin"
               [style.left]="position.x + 'px'"
               [style.top]="position.y + 'px'">
          </div>
        </mat-card>
    </div>
    `
})
export class LocationComponent implements OnInit {
  @ViewChild('pin') pin;
  position: any;

  constructor() {}

  ngOnInit() {
    const PIN_OFFSET_X = 26,
      PIN_OFFSET_Y = 16;

    const move$ = fromEvent(document, 'mousemove')
      .pipe(
        map((event: MouseEvent) => {
          const offset = $(event.target).offset();
          return {
            x: event.clientX - offset.left - PIN_OFFSET_X,
            y: event.clientY - offset.top - PIN_OFFSET_Y
          };
        })
      );

    const down$ = fromEvent(this.pin.nativeElement, 'mousedown')
      .pipe(tap(event => this.pin.nativeElement.style.pointerEvents = 'none'));

    const up$ = fromEvent(document, 'mouseup')
      .pipe(tap(event => this.pin.nativeElement.style.pointerEvents = 'all'));

    down$
      .pipe(
        switchMap(event => move$.pipe(takeUntil(up$))),
        startWith({ x: window.innerWidth / 2, y: 100})
      )
      .subscribe(result => this.position = result);
  }
}
