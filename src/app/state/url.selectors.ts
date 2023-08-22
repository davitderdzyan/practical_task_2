import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UrlState } from './url.reducer';

export const selectUrlState = createFeatureSelector<UrlState>('url');

export const selectFirstUrl = createSelector(
  selectUrlState,
  state => state.url.short
);

export const selectSecondUrl = createSelector(
  selectUrlState,
  state => state.url.secondShort
);