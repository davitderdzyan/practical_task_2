import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UrlService } from '../url.service';
import { fetchShorterUrl, fetchShorterUrlSuccess, fetchShorterUrlFailure } from './url.actions';

@Injectable()
export class UrlEffects {

  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchShorterUrl),
      mergeMap(action =>
        this.urlService.fetchShorterUrl(action.url).pipe(
          map(apiData => this.transformApiData(apiData)), 
          map(transformedData => fetchShorterUrlSuccess({url: transformedData})),
          catchError(error => of(fetchShorterUrlFailure({ error: `Failed to fetch the url, ${error}` })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private urlService: UrlService
  ) {}

  private transformApiData(apiData: any): any {
    return {
      short: apiData['result']['short_link'],
      secondShort: apiData['result']['short_link2'],
    };
  }
}
