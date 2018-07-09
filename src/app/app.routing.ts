import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

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
  GameComponent,
  SliderComponent,
  WaitForStreamComponent,
  CombiningStreamsComponent
} from './examples';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/concepts/00-basic-sequence',
    pathMatch: 'full'
  },
  {path: 'concepts/00-basic-sequence', component: BasicSequenceComponent},
  {path: 'concepts/01-maintaining-state', component: MaintainingStateComponent},
  {path: 'concepts/02-merging-streams', component: MergingStreamsComponent},
  {path: 'concepts/03-map-to-functions', component: MapToFunctionsComponent},
  {path: 'concepts/04-triggers', component: TriggersComponent},
  {path: 'concepts/05-stream-origin', component: StreamOriginComponent},
  {path: 'concepts/06-simple-animation', component: SimpleAnimationComponent},
  {path: 'concepts/07-animation', component: AnimationComponent},
  {path: 'concepts/08-event-communication', component: EventCommunicationComponent},

  {path: 'examples/00-form-input', component: InputComponent},
  {path: 'examples/01-counter', component: CounterComponent},
  {path: 'examples/02-slideshow', component: SlideshowComponent},
  {path: 'examples/04-location', component: LocationComponent},
  {path: 'examples/05-map-route', component: MapComponent},
  {path: 'examples/05-annotate', component: AnnotateComponent},
  {path: 'examples/10-game', component: GameComponent},
  {path: 'examples/14-slider', component: SliderComponent},
  {path: 'examples/15-wait-for-stream', component: WaitForStreamComponent},
  {path: 'examples/16-combining-streams', component: CombiningStreamsComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
