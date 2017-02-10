import request from 'superagent';

export const Get = (apiName) => {
  return new Promise(
    (resolve, reject) => {
      request.get("http://xxxxxxxxxx.azurewebsites.net/api/" + apiName)
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
export const Post = (apiName) => {
  return new Promise(
    (resolve, reject) => {
      request.get("http://xxxxxxxxxx.azurewebsites.net/api/" + apiName)
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
