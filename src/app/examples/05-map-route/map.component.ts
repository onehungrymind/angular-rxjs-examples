import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, pairwise, startWith } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-map',
  styles: [`
    mat-card {
      width: 100%;
      box-sizing: border-box;
      margin: 16px;
      background: #fff url(assets/london-map.jpg);
      background-size: cover;
    }

    .card-container {
      display: flex;
      flex-flow: row wrap;
      position: fixed;
      top: 70px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `],
  template: `
    <div class="card-container">
      <mat-card>
        <app-line *ngFor="let line of lines" [line]="line"></app-line>
      </mat-card>
    </div>
  `
})
export class MapComponent implements OnInit {
  lines: any[] = [];

  constructor() {
  }

  ngOnInit() {
    fromEvent(document, 'click')
      .pipe(
        map((event: MouseEvent) => {
          const offset = $(event.target).offset();
          return {
            x: event.clientX - offset.left,
            y: event.clientY - offset.top
          };
        }),
        pairwise(),
        map(positions => {
          const p1 = positions[0];
          const p2 = positions[1];
          return {x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y};
        }),
      )
      .subscribe(line => this.lines = [...this.lines, line]);
  }
}
