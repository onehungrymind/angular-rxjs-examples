import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {
  CircleComponent,
  LineComponent,
  ShotComponent
} from './shared/components';

import {
  AnimalService,
  BooksService,
  NotificationService,
  SalesNumbersService
} from './shared/services';

import {
  BasicSequenceComponent,
  MaintainingStateComponent,
  MergingStreamsComponent,
  MapToFunctionsComponent,
  TriggersComponent,
  StreamOriginComponent,
  SimpleAnimationComponent,
  AnimationComponent,
  EventCommunicationComponent
} from './concepts';

import {
  InputComponent,
  CounterComponent,
  SlideshowComponent,
  LocationComponent,
  MapComponent,
  AnnotateComponent,
  DocComponent,
  GameComponent,
  SliderComponent,
  SalesWidgetComponent
} from './examples';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    LineComponent,
    ShotComponent,

    BasicSequenceComponent,
    MaintainingStateComponent,
    MergingStreamsComponent,
    MapToFunctionsComponent,
    TriggersComponent,
    StreamOriginComponent,
    SimpleAnimationComponent,
    AnimationComponent,

    InputComponent,
    CounterComponent,
    SlideshowComponent,
    LocationComponent,
    MapComponent,
    AnnotateComponent,
    DocComponent,
    GameComponent,
    SliderComponent,
    SalesWidgetComponent,
    EventCommunicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    AnimalService,
    BooksService,
    NotificationService,
    SalesNumbersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
