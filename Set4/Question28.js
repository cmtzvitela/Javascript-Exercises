let async = {
  getAll: async function (urlArray, callback) {
    const responses = await Promise.all(urlArray);
    return callback(responses);
  },
};
const urlArray = ['http://example.com', 'http://example2.com', 'http://example3.com'];

function printToTheConsole(data) {
  console.log(data);
}

async.getAll(urlArray, printToTheConsole);
