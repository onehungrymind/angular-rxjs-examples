import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, switchMap, pairwise, takeUntil } from 'rxjs/operators';
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
    // -------------------------------------------------------------------
    // CHALLENGE: Annotate over the document
    // -------------------------------------------------------------------
    // Create the streams needed to draw a line
    // Sequence them appropriately
    // Hints have been given to help keep you focused
    // -------------------------------------------------------------------

    // HINT 01: This will save you some heavy lifting
    // map((e: MouseEvent) => {
    //   const offset = $(e.target).offset();
    //   return {
    //     x: e.clientX - offset.left,
    //     y: e.pageY - offset.top
    //   };
    // }),
    // pairwise(),

    // HINT 02: This will save you some heavy lifting
    // map(positions => {
    //   const p1 = positions[0];
    //   const p2 = positions[1];
    //   return {x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y};
    // })
  }
}
