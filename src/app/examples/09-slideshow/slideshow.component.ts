import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, merge } from 'rxjs/index';
import { map, scan, startWith } from 'rxjs/operators';
import { slideshowAnimation } from './slideshow.animations';

const images: string[] = [
  'assets/lion-roar.jpg',
  'assets/maxres.jpg',
  'assets/maxresdefault.jpg'
];

@Component({
  selector: 'app-slideshow',
  styleUrls: ['./slideshow.component.css'],
  templateUrl: './slideshow.component.html',
  animations: [slideshowAnimation]
})
export class SlideshowComponent implements OnInit {
  @ViewChild('previous') previous;
  @ViewChild('next') next;
  images: any[] = images;
  position: any;
  currentIndex = 0;
  currentDirection = 'left';

  constructor() {}

  ngOnInit() {
    const previous$ = fromEvent(this.getNativeElement(this.previous), 'click')
      .pipe(map(event => ({shift: -1, direction: 'right'})));

    const next$ = fromEvent(this.getNativeElement(this.next), 'click')
      .pipe(map(event => ({shift: +1, direction: 'left'})));

    merge(previous$, next$)
      .pipe(
        startWith({index: 0} as any),
        scan((acc, curr) => {
          const projectedIndex = acc.index + curr.shift;

          const adjustedIndex = projectedIndex < 0 ? this.images.length - 1
            : projectedIndex >= this.images.length ? 0
              : projectedIndex;

          return {index: adjustedIndex, direction: curr.direction};
        })
      )
      .subscribe(event => {
        this.currentIndex = event.index;
        this.currentDirection = event.direction;
      });
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
