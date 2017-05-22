import request from 'superagent';

// const url = 'http://evmapp20170130101609.azurewebsites.net/api/';
const url = 'http://localhost:18593/api/v1';


export const GetUri = (api, action, arrayParams) => {
  const strParams = arrayParams.join('/');
  return new Promise(
    (resolve, reject) => {
      request
        .get(`${url}/${api}/${action}/${strParams}`) // api/action/param1/param2/...
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


export const Get = (apiName, param1, param2) => {
  return new Promise(
    (resolve, reject) => {
      request
        .get(`${url}/${apiName}/${param1}/${param2}`)
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
        .post(`${url}/${apiName}`)
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

