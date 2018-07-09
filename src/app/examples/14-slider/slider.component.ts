import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { filter, map, pairwise, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
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
        <h1>Min/Max Selector</h1>
        <form [formGroup]="myForm">
          <input type="range" formControlName="min" [min]="min" [max]="max" [step]="step">
          <p>min - {{minValue | async}}</p>
          <input type="range" formControlName="max" [min]="min" [max]="max" [step]="step">
          <p>max - {{maxValue | async}}</p>
        </form>
      </mat-card>
    </div>
  `
})
export class SliderComponent implements OnInit {
  myForm: FormGroup;
  minValue: Observable<number>;
  maxValue: Observable<number>;
  min = 0;
  max = 100;
  startMin = 45;
  startMax = 55;
  step = 1;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.builder.group({
      min: this.startMin,
      max: this.startMax
    });

    const valueStream = this.myForm.valueChanges
      .pipe(
        map(val => {
          return {
            min: parseFloat(val.min),
            max: parseFloat(val.max)
          };
        }),
        pairwise(),
        filter(([oldVal, newVal]) => {
          let isValid = true;
          if (oldVal.min !== newVal.min && newVal.min > newVal.max) {
            isValid = false;
            (<FormControl>this.myForm.controls['max']).setValue(newVal.min);
          } else if (oldVal.max !== newVal.max && newVal.max < newVal.min) {
            isValid = false;
            (<FormControl>this.myForm.controls['min']).setValue(newVal.max);
          }
          return isValid;
        }),
        map(([oldVal, newVal]) => newVal)
      );

    this.minValue = valueStream
      .pipe(
        map(vals => vals.min),
        startWith(this.startMin)
      );

    this.maxValue = valueStream
      .pipe(
        map(vals => vals.max),
        startWith(this.startMax)
      );
  }
}
