import { Component, OnInit } from '@angular/core';
import { SalesNumbersService } from '../../shared/services';

@Component({
  selector: 'app-sales-widget',
  styles: [`
    mat-card {
      width: 400px;
      box-sizing: border-box;
      margin: 16px;
    }

    .card-container {
      display: flex;
      flex-flow: row wrap;
    }
  `],
  template: `
    <div class="card-container">
      <mat-card>
        <h1>Sales Numbers</h1>
        <h3>Buy: {{ minValue | currency}}</h3>
        <h3>Sell: {{ maxValue | currency}}</h3>
      </mat-card>

      <mat-card *ngIf="numbers$ | async as numbers">
        <h1>Sales Numbers</h1>
        <h3>Buy: {{ numbers.min | currency}}</h3>
        <h3>Sell: {{ numbers.max | currency}}</h3>
      </mat-card>
    </div>
  `
})
export class SalesWidgetComponent implements OnInit {
  numbers$;
  minValue;
  maxValue;

  constructor(private salesNumbers: SalesNumbersService) {
    this.numbers$ = salesNumbers.numbers$;
  }

  ngOnInit() {
    this.salesNumbers.numbers$
      .subscribe(({min, max}) => {
        this.minValue = min;
        this.maxValue = max;
      });
  }
}
