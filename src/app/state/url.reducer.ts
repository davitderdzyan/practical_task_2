import { createReducer, on } from '@ngrx/store';
import { fetchShorterUrl, fetchShorterUrlFailure, fetchShorterUrlSuccess } from './url.actions';

export interface UrlState { 
    error: any,
    loading:boolean,
    url: {
      short: string | null;
      secondShort: string | null;
    }
  }

export const initialState: UrlState = {
  loading:false,
  error:null,
  url: {
    short:"",
    secondShort:"",
  }
};

export const urlReducer = createReducer(
  initialState,
  on(fetchShorterUrl, (state)=> ({ ...state, loading: true, error: null })),
  on(fetchShorterUrlFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(fetchShorterUrlSuccess, (state, { url }) =>  ({ ...state, loading: false , url})),
);