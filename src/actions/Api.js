import request from 'superagent';

export default (apiName) => {
  return new Promise(
    (resolve, reject) => {
      request.get("http://evmapp20170130101609.azurewebsites.net/api/" + apiName)
        .end(
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(JSON.parse(res.text));
            }
          }
        );
    }
  );
}
