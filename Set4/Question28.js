let async = {
  getAll: function (urlArray, callback) {
    return Promise.all(urlArray).then((responses) => callback(responses));
    // urlArray.map((url) =>
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then(callback())
    // )
  },
};
const urlArray = ['http://example.com', 'http://example2.com', 'http://example3.com'];

function printToTheConsole(data) {
  console.log(data);
}

async.getAll(urlArray, printToTheConsole);
