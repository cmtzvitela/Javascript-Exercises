let async = {
  getAll: function (urlArray, callback) {
    Promise.all(urlArray).then(callback);
  },
};

function getSomething1() {
  const http = new XMLHttpRequest();
  const url = "http://example.com";

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  http.open("GET", url);
  http.send();
}

function getSomething2() {
  const http = new XMLHttpRequest();
  const url = "http://example.com";

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  http.open("GET", url);
  http.send();
}

function getSomething3() {
  const http = new XMLHttpRequest();
  const url = "http://example.com";

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  http.open("GET", url);
  http.send();
}

function printToTheConsole(...values) {
  values.forEach((element) => {
    console.log(element);
  });
}

async.getAll([getSomething1, getSomething2, getSomething3], printToTheConsole);
