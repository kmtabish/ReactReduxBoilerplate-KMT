const AppSecrets = require(`../assets/keys/${NODE_ENV}.js`);
const Config = AppSecrets.keys.api;

export const ApiNames = Object.freeze({
    Currency: 'Currency',
});



export const getPreset = () => {
  let _url = `${Config.protocol}://${Config.host}`;
  if (Config.port) {
    _url = `${_url}:${Config.port}`;
  }
  if (Config.namespace) {
    _url = `${_url}${Config.namespace}`;
  }
  return _url;
}

export const ApiConfig = Object.freeze([
  {
    name: ApiNames.Currency, // namespace for apis
    url: `${getPreset()}/currency/get`, // url for api
  }
]);

