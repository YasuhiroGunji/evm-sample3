import request from 'superagent';

const url = 'http://evmapp20170130101609.azurewebsites.net/api/';
// const url = 'http://localhost:18593/api/';

export const Get = (apiName, queryStr) => {
  return new Promise(
    (resolve, reject) => {
      request
        .get(url + apiName)
        .query({ queryStr })
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

export const Post = (apiName, postData) => {
  return new Promise(
    (resolve, reject) => {
      request
        .post(url + apiName)
        .send({ postData })
        .type('application/json')
        .accept('application/json')
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

