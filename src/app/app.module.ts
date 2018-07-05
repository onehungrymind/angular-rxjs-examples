import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebase.conf';

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
  CounterClientComponent,
  CounterMasterComponent,
  SlideshowComponent,
  SlideshowClientComponent,
  SlideshowMasterComponent,
  LocationComponent,
  LocationClientComponent,
  LocationMasterComponent,
  MapComponent,
  MapClientComponent,
  MapMasterComponent,
  AnnotateComponent,
  AnnotateClientComponent,
  AnnotateMasterComponent,
  DocComponent,
  GameComponent,
  GameClientComponent,
  GameMasterComponent,
  SliderComponent,
  SliderClientComponent,
  SliderMasterComponent,
  WaitForStreamComponent
} from './examples';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSelectModule,
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
    CounterClientComponent,
    CounterMasterComponent,
    SlideshowComponent,
    SlideshowClientComponent,
    SlideshowMasterComponent,
    LocationComponent,
    LocationClientComponent,
    LocationMasterComponent,
    MapComponent,
    MapClientComponent,
    MapMasterComponent,
    AnnotateComponent,
    AnnotateClientComponent,
    AnnotateMasterComponent,
    DocComponent,
    GameComponent,
    GameClientComponent,
    GameMasterComponent,
    SliderComponent,
    SliderClientComponent,
    SliderMasterComponent,
    WaitForStreamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
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
