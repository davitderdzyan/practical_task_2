import { createAction, props } from '@ngrx/store';

export const fetchShorterUrl = createAction('[Url Component] Fetch Shorter Url', props<{ url: string }>());

export const fetchShorterUrlSuccess = createAction('[Url Component] Fetch Shorter Url Success', props<{ url: any }>());

export const fetchShorterUrlFailure = createAction('[Url Component] Fetch Shorter Url Failure', props<{ error: any }>());