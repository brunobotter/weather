import { RouterState } from './router/router.reduce';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    router: RouterReducerState<RouterState>,
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
  };