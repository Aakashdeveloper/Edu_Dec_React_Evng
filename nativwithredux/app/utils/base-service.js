const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const get = (apiurl, headers) => (
  fetch(`${apiurl}`, {
    method: 'GET',
    headers: headers || defaultHeaders,
  })
);