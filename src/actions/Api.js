import request from 'superagent';

function callApi(apiName) {
  return new Promise() {
    (resolve, reject) => {
      request.get("http://localhost/" + apiName)
        .end(
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(JSON.parse(res.text);
            }
          }
        );
    }
  };
}
