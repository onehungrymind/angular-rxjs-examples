import { Component, OnInit } from '@angular/core';
import 'gsap';
import { NotificationService } from './shared/services';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  concepts = [
    {path: '/concepts/00-basic-sequence', name: 'Basic Sequence'},
    {path: '/concepts/01-maintaining-state', name: 'Maintaining State'},
    {path: '/concepts/02-merging-streams', name: 'Merging Streams'},
    {path: '/concepts/03-map-to-functions', name: 'Mapping to Functions'},
    {path: '/concepts/04-triggers', name: 'Event Triggers'},
    {path: '/concepts/05-stream-origin', name: 'Stream Origins'},
    {path: '/concepts/06-simple-animation', name: 'Simple Animation'},
    {path: '/concepts/07-animation', name: 'Animation'},
    {path: '/concepts/08-event-communication', name: 'Event Communication'}
  ];
  examples = [
    {path: '/examples/00-form-input', name: 'Form Input'},
    {path: '/examples/01-counter', name: 'Counter'},
    {path: '/examples/02-slideshow', name: 'Slideshow'},
    {path: '/examples/04-location', name: 'Location'},
    {path: '/examples/05-map-route', name: 'Map Route'},
    {path: '/examples/05-annotate', name: 'Annotate'},
    {path: '/examples/10-game', name: 'Game'},
    {path: '/examples/14-slider', name: 'Slider'},
    // {path: '/examples/15-wait-for-stream', name: 'Wait for Stream'},
    // {path: '/examples/16-combining-streams', name: 'Combining Streams'}
  ];

  constructor(private snackbar: MatSnackBar, private ns: NotificationService) {
  }

  ngOnInit() {
    this.ns.notifications$
      .subscribe(notification => this.showNotification(notification));
  }

  showNotification(notification) {
    this.snackbar.open(notification, 'OK', {
      duration: 3000
    });
  }
}
