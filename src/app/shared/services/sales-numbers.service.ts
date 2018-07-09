import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesNumbersService {
  private subject = new Subject();
  numbers$ = this.subject.asObservable();

  dispatch(numbers) {
    this.subject.next(numbers);
  }
}
