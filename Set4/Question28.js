let async = {
  getAll: function (urlArray, callback) {
    return Promise.all(
      urlArray.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then(callback())
      )
    );
  },
};
const urlArray = ["http://example.com", "http://example2.com", "http://example3.com"];

function printToTheConsole(...values) {
  const promiseObject = {};
  for (let i = 0; i < values.length; i++) {
    promiseObject[i] = values[i];
  }
}

async.getAll(urlArray, printToTheConsole);
