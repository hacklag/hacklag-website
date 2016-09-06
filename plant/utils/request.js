/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {objct} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then((repsonseJSON) => {
    const error = new Error(response.statusText);
    error.response = repsonseJSON;
    throw error;
  });
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}
 */
function Request(url, options = {}) {
  const opts = options;
  const { headers = {} } = options;

  opts.headers = new Headers(headers);

  if (/api\.syncano/.test(url)) {
    if (!opts.headers.has('Content-type')) {
      opts.headers.append('Content-type', 'application/json');
    }
  }

  return fetch(url, opts)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data);
}

Request.get = (url, options) => new Request(url, {
  method: 'GET',
  ...options,
});

Request.post = (url, data, options) => new Request(url, {
  body: JSON.stringify(data),
  method: 'POST',
  ...options,
});

Request.patch = (url, data, options) => new Request(url, {
  body: JSON.stringify(data),
  method: 'PATCH',
  ...options,
});

Request.put = (url, data, options) => new Request(url, {
  body: JSON.stringify(data),
  method: 'PUT',
  ...options,
});

Request.delete = (url, data, options) => new Request(url, {
  body: JSON.stringify(data),
  method: 'DELETE',
  ...options,
});

export default Request;
