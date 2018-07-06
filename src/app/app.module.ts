import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { CircleComponent } from './circle/circle.component';
import { LineComponent } from './line/line.component';
import { ShotComponent } from './shot/shot.component';


import {
  BasicSequenceComponent,
  MaintainingStateComponent,
  MergingStreamsComponent,
  MapToFunctionsComponent,
  TriggersComponent,
  StreamOriginComponent,
  SimpleAnimationComponent,
  AnimationComponent,
  CounterComponent,
  SlideshowComponent,
  LocationComponent,
  MapComponent,
  AnnotateComponent,
  DocComponent,
  GameComponent,
  SliderComponent,
  WaitForStreamComponent,
  CombiningStreamsComponent
} from './examples';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    LineComponent,
    ShotComponent,
    BasicSequenceComponent,
    BasicSequenceComponent,
    MaintainingStateComponent,
    MergingStreamsComponent,
    MapToFunctionsComponent,
    TriggersComponent,
    StreamOriginComponent,
    SimpleAnimationComponent,
    AnimationComponent,
    CounterComponent,
    SlideshowComponent,
    LocationComponent,
    MapComponent,
    AnnotateComponent,
    DocComponent,
    GameComponent,
    SliderComponent,
    WaitForStreamComponent,
    CombiningStreamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
