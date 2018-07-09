import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimalService } from '../../shared/services/index';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combining-streams',
  template: `
    <button (click)="randomize()" mat-raised-button color="accent">Randomize</button>
    <hr>
    <div class="images">
      <video controls *ngIf="isVideo(dog); else dogImage;" [src]="dog.url"></video>
      <ng-template #dogImage>
        <img *ngIf="dog" [src]="dog.url" alt="Random Dog">
      </ng-template>
      <img *ngIf="cat" [src]="cat" alt="Random Cat">
    </div>
  `,
  styles: [`
    .images {
      display: flex;
      align-items: center;
    }

    img {
      max-width: 500px;
    }

    img:not(:first-child) {
      margin-left: 15px;
    }
  `]
})

export class CombiningStreamsComponent implements OnInit {
  dog;
  cat;
  dog$;
  cat$;

  constructor(private animalService: AnimalService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.dog$ = this.animalService.getDog();
    this.cat$ = this.animalService.getCat()
      .pipe(
        map(cat => this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(cat)))
      );
  }

  randomize() {
    forkJoin(this.dog$, this.cat$)
      .subscribe(([dog, cat]) => {
        this.dog = dog;
        this.cat = cat;
      });
  }

  isVideo(dog) {
    return dog && dog.url.includes('mp4');
  }
}
