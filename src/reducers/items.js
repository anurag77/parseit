import {Map} from 'immutable';

export function items(state = Map(), action) {
  switch (action.type) {
    case 'FETCHED_DOC':
      return state
        .set('document', action.body);

  default:
    return state;
  }
}
