import { Component, OnInit } from '@angular/core';
import { map, pairwise, startWith } from 'rxjs/operators';
import { fromEvent } from 'rxjs/index';
import * as $ from 'jquery';

@Component({
  selector: 'app-annotate',
  styles: [`
    mat-card {
      width: 400px;
      box-sizing: border-box;
      margin: 16px;
    }

    .card-container {
      position: fixed;
      top: 70px;
      bottom: 0;
      display: flex;
      flex-flow: row wrap;
    }
  `],
  template: `
    <div class="card-container">
      <mat-card>
        <app-line *ngFor="let line of lines" [line]="line"></app-line>
        <app-doc></app-doc>
      </mat-card>
    </div>
  `
})
export class AnnotateComponent implements OnInit {
  lines: any[] = [];

  constructor() {
  }

  ngOnInit() {
    const emptyLine: any = {x1: 0, y1: 0, x2: 0, y2: 0};

    fromEvent(document, 'mousemove')
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
        startWith(emptyLine)
      )
      .subscribe(line => this.lines = [...this.lines, line]);
  }
}
