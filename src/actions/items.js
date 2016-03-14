import Request from 'request';

export function fetchDocument(url) {
  return function(dispatch) {
    Request(url, (err, resp, body) => {
      if(err)
        throw err;

      dispatch(updateDocument(body));
    })
  };
}

export function delItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}

export function updateDocument(document) {
  return {
    type: 'FETCHED_DOC',
    body: document
  };
}
