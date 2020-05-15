function sendRequest(method, url) {
  return fetch(url).then(response => {
    return response.json();
  });
}

export default sendRequest;