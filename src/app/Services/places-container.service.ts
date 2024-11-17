import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesContainerService {
  constructor(private httpClient: HttpClient, private destroyRef: DestroyRef) {}

  getPlaces(): any {
    var subscribtionHttp = this.httpClient.get('/api/getPlaces').subscribe({
      next(value) {
        console.log(value);
      },
      complete() {
        console.log('complete');
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
