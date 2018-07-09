import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
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
  currentIndex = 0;
  currentDirection = 'left';

  constructor() {
  }

  ngOnInit() {
    // -------------------------------------------------------------------
    // CHALLENGE: Get the Slideshow Working
    // -------------------------------------------------------------------
    // Create a previous$ stream to capture the previous button click
    // Create a next$ stream to capture the next button click
    // Pass an object that looks like this {shift: -1, direction: 'right'}
    // Combine both streams to update the same slideshow
    // -------------------------------------------------------------------

    // HINT: This will save you some heavy lifting
    // const projectedIndex = acc.index + curr.shift;
    // const length = this.images.length;
    // const adjustedIndex = this.adjustForMinIndex(length, this.adjustForMaxIndex(length, projectedIndex));
  }

  adjustForMinIndex(length, index) {
    return index < 0 ? length - 1 : index;
  }

  adjustForMaxIndex(length, index) {
    return index >= length ? 0 : index;
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
