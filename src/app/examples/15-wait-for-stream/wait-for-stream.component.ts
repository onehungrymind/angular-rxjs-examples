import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from './books.service';
import { MatButton } from '@angular/material';
import { fromEvent } from 'rxjs/index';
import { exhaustMap, tap } from 'rxjs/internal/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-wait-for-stream',
  template: `
    <mat-form-field class="search">
      <input name="search" [formControl]="searchControl" type="search" matInput placeholder="Search Books">
    </mat-form-field>
    <button #search mat-raised-button color="accent">Search</button>
    <mat-list>
      <h3 mat-subheader>Books</h3>
      <mat-divider></mat-divider>
      <mat-list-item *ngFor="let book of books">
        <h4 mat-line>{{book.title}}</h4>
        <p mat-line> {{book.first_publish_year}} | {{book.author_name ? book.author_name[0] : ''}} </p>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    .search {
      width: 100%;
      max-width: 500px;
      margin-left: 15px;
    }
    button {
      margin-left: 15px;
    }
    mat-list {
      height: 100%;
      overflow: auto;
    }
  `],
  providers: [BooksService]
})
export class WaitForStreamComponent implements OnInit {
  @ViewChild('search') search: MatButton;

  books;
  searchControl: FormControl = new FormControl('');

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    fromEvent(this.getNativeElement(this.search), 'click')
      .pipe(
        exhaustMap(event => this.booksService.search(this.searchControl.value)),
        tap((response: any) => this.books = response.docs)
      ).subscribe();
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }

}
