const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (function asyncValidate(values /*, dispatch */) {
  sleep(1000); // simulate server latency
  if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
    throw { email: 'Email already Exists' };
  }
});