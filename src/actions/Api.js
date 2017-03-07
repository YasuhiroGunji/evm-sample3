import request from 'superagent';

const url = 'http://evmapp20170130101609.azurewebsites.net/api/';
// const url = 'http://localhost:18593/api/';

export const Get = (apiName) => {
  return new Promise(
    (resolve, reject) => {
      request.get(url + apiName)
        .end(
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(JSON.parse(res.text));
            }
          },
        );
    },
  );
};

export const Post = (apiName) => {
  return new Promise(
    (resolve, reject) => {
      request.get(url + apiName)
        .end(
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(JSON.parse(res.text));
            }
          },
        );
    },
  );
};

