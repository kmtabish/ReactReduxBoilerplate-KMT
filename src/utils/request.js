import axios from 'axios';
import { getPreset, ApiConfig } from './network';
// import NEtwork from 'constants/network';
// import _ from 'loadash';

// console.log('Network const - ', NEtwork);
// console.log('GetPreset is', getPreset);
let $httpRequest = axios.create({
  baseURL: getPreset()
});
$httpRequest.defaults.headers.common['Content-Type'] = 'application/json';
$httpRequest.defaults.headers.common['Accept'] = 'application/json';
$httpRequest.defaults.timeout = 100000;

const reportError = (error) => {
  console.log(error);
}

const _DefaultOptions = {
  method: 'POST'
}

const _prepareAxiosConfig = (url, options = {}, payload = {}, config = { includeOpaqueData: true}) => {
  const {params, data} = payload;
  const apiConfig = ApiConfig.find(api => api.url == url);
  if(data) {
  // add meta-data
  data.metadata= {
    clientId: "web"
    } 
  }
  const _data = {
    authToken: apiConfig.authRequired ? localStorage.getItem('access_token') : null, // add access token to every request.
    opaqueData: apiConfig.authRequired ? JSON.parse(localStorage.getItem('opaqueData')) : null,  // add access token to every request.
  }
  return {
    url,
    data: _data,
    params
  };
};


export const httpRequest = (url, options, payload, config) => {
  const _AxiosConfig = _prepareAxiosConfig(url, options || _DefaultOptions, payload, config);
  return new Promise((resolve, reject) => {
    console.log('HTTP request config - ', _AxiosConfig);
    $httpRequest(_AxiosConfig)
      .then(response => {
        console.log('Http response', response);
            //response.data.authToken && localStorage.setItem('access_token', response.data.authToken);
            //response.data.opaqueData && localStorage.setItem('opaqueData', JSON.stringify(response.data.opaqueData));
          return resolve(response.data);
      }).catch(error => {
          reportError(error);
          return reject(error);
    });
  });
};

export const findApiConfigByName = (apiName) => {
  // const _findApiConfigByName = (apiName) => (config) => config.name == apiName;
  return ApiConfig.find(config => config.name == apiName);
}

/**
 * This function is responsible for handling blob request, due to the fact that in case of error
 * contnt-type of bolb request is 'application-json' instead of 'spplication/pdf'.
 * @param {*} url
 * @param {*} options
 * @param {*} payload
 * @param {*} config
 */
